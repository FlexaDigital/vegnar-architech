'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  'product-category': number[];
  link: string;
  acf: {
    product_code?: string;
    specifications?: string;
    features?: string;
    dimensions?: string;
  };
}

interface MediaItem {
  id: number;
  source_url: string;
  title?: {
    rendered: string;
  };
}

export default function ProductDetailClient({ slug, imageUrl }: { slug: string; imageUrl?: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [productImage, setProductImage] = useState<string>(imageUrl || '');
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [mediaItems, setMediaItems] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current product
        const response = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/product?slug=${slug}&_fields=id,title,content,slug,featured_media,product-category,link,acf`);
        const products: Product[] = await response.json();
        
        if (products.length === 0) {
          setError('Product not found');
          setIsLoading(false);
          return;
        }

        const productData = products[0];
        setProduct(productData);

        // Fetch recommended products from same category
        const recommendedResponse = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/product?product-category=${productData['product-category'][0]}&per_page=4&exclude=${productData.id}&_fields=id,title,slug,featured_media`);
        const recommendedData: Product[] = await recommendedResponse.json();
        setRecommendedProducts(recommendedData);

        // Fetch media for recommended products
        const allProducts = [...recommendedData];
        if (productData.featured_media) allProducts.push(productData);
        
        const mediaIds = allProducts.map(p => p.featured_media).filter(id => id > 0);
        const mediaPromises = mediaIds.map(id =>
          fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/media/${id}`)
            .then(res => res.json())
            .catch(() => null)
        );

        const mediaResults = await Promise.all(mediaPromises);
        const mediaMap: Record<number, string> = {};
        mediaResults.forEach((media: MediaItem | null) => {
          if (media?.id) {
            mediaMap[media.id] = media.source_url;
          }
        });
        setMediaItems(mediaMap);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load product');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#2B4257]/20 border-t-[#2B4257] rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#2B4257] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const currentImage = productImage || mediaItems[product?.featured_media || 0] || '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b relative z-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#2B4257]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-[#2B4257]">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#2B4257] font-medium">{product?.title.rendered}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border">
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={product?.title.rendered}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product?.title.rendered}</h1>
              {product?.acf?.product_code && (
                <p className="text-lg text-gray-600">Model: {product.acf.product_code}</p>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                ✓ In Stock
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                ⚡ Fast Delivery
              </span>
            </div>

            <div className="bg-gradient-to-r from-[#2B4257] to-[#1a2834] text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Get Custom Quote</h3>
              <p className="text-blue-100 mb-4">Professional pricing based on your requirements</p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-white text-[#2B4257] py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request Quote
                </button>
                <button className="flex-1 border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-[#2B4257] transition-colors">
                  Call Expert
                </button>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                {product?.acf?.specifications && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#2B4257] rounded-full mr-3"></span>
                      Specifications
                    </h3>
                    <div className="text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.acf.specifications }} />
                  </div>
                )}

                {product?.acf?.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#2B4257] rounded-full mr-3"></span>
                      Features
                    </h3>
                    <div className="text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.acf.features }} />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Material</h4>
                    <p className="text-gray-600">Premium Stainless Steel</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Warranty</h4>
                    <p className="text-gray-600">2 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((recProduct) => (
                <Link key={recProduct.id} href={`/products?slug=${recProduct.slug}${recProduct.featured_media && mediaItems[recProduct.featured_media] ? `&image=${encodeURIComponent(mediaItems[recProduct.featured_media])}` : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      {recProduct.featured_media && mediaItems[recProduct.featured_media] ? (
                        <img
                          src={mediaItems[recProduct.featured_media]}
                          alt={recProduct.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#2B4257] transition-colors">
                        {recProduct.title.rendered}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">View Details →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}