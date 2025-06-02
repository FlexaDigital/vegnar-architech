'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: number;
  taxonomy: string;
}

interface Product {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  'product-category': number[];
  link: string;
}

interface MediaItem {
  id: number;
  source_url: string;
}

export default function ProductCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [mediaItems, setMediaItems] = useState<Record<number, string>>({});
  const [activeTab, setActiveTab] = useState<string>('');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/product-category'),
          fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/product?per_page=100')
        ]);

        const categoriesData: Category[] = await categoriesResponse.json();
        const productsData: Product[] = await productsResponse.json();
        
        // Fetch media items for products with featured media
        const mediaIds = productsData
          .map(product => product.featured_media)
          .filter(id => id > 0);

        const mediaPromises = mediaIds.map(id =>
          fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/media/${id}`)
            .then(res => res.json())
            .catch(() => null)
        );

        const mediaResults = await Promise.all(mediaPromises);
        const mediaMap: Record<number, string> = {};
        mediaResults.forEach((media: MediaItem | null) => {
          if (media && media.id) {
            mediaMap[media.id] = media.source_url;
          }
        });

        setMediaItems(mediaMap);
        
        // Filter main categories (parent = 0)
        const mainCategories = categoriesData.filter(cat => cat.parent === 0);
        setCategories(categoriesData);
        setProducts(productsData);
        
        if (mainCategories.length > 0) {
          setActiveTab(mainCategories[0].slug);
          // Find subcategories for the first main category
          const firstCategorySubcategories = categoriesData.filter(cat => cat.parent === mainCategories[0].id);
          if (firstCategorySubcategories.length > 0) {
            setActiveSubcategory(firstCategorySubcategories[0].slug);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[600px] w-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#2B4257]/20 border-t-[#2B4257] rounded-full animate-spin" />
      </div>
    );
  }

  const mainCategories = categories.filter(cat => cat.parent === 0);
  const activeCategory = mainCategories.find(cat => cat.slug === activeTab);
  const subcategories = activeCategory 
    ? categories.filter(cat => cat.parent === activeCategory.id)
    : [];

  // Filter products based on active category and subcategory
  const filteredProducts = products.filter(product => {
    const activeSubcategoryObj = categories.find(cat => cat.slug === activeSubcategory);
    if (activeSubcategoryObj) {
      return product['product-category'].includes(activeSubcategoryObj.id);
    }
    const activeCategoryObj = categories.find(cat => cat.slug === activeTab);
    if (activeCategoryObj) {
      // Show products from main category and its subcategories
      const categoryAndSubcategoryIds = [
        activeCategoryObj.id,
        ...categories
          .filter(cat => cat.parent === activeCategoryObj.id)
          .map(cat => cat.id)
      ];
      return product['product-category'].some(catId => 
        categoryAndSubcategoryIds.includes(catId)
      );
    }
    return false;
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="max-w-4xl h-[80vh] w-full relative">
              <Image
                src={selectedImage}
                alt="Selected Product"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Tabs - Sticky */}
      <div className="sticky top-0 bg-white z-40 py-4 border-b border-gray-200">
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
          {mainCategories.map((category, index) => (
            <motion.button
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setActiveTab(category.slug);
                setCurrentPage(1);
                const categorySubcategories = categories.filter(cat => cat.parent === category.id);
                if (categorySubcategories.length > 0) {
                  setActiveSubcategory(categorySubcategories[0].slug);
                }
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === category.slug
                  ? 'bg-[#2B4257] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Subcategories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setActiveSubcategory('');
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      !activeSubcategory
                        ? 'bg-[#2B4257] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                  {subcategories.map((sub) => (
                    <button
                      key={sub.slug}
                      onClick={() => {
                        setActiveSubcategory(sub.slug);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSubcategory === sub.slug
                          ? 'bg-[#2B4257] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Area */}
          <div className="flex-1">
            {/* Products Count and Controls */}
            <div className="sticky top-24 bg-white z-30 pb-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-gray-600">
                  Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                </div>
                <div className="flex items-center gap-4">
                  <select 
                    value={productsPerPage}
                    onChange={(e) => {
                      setProductsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
                  >
                    <option value={12}>12 per page</option>
                    <option value={24}>24 per page</option>
                    <option value={36}>36 per page</option>
                    <option value={48}>48 per page</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    if (product.featured_media && mediaItems[product.featured_media]) {
                      setSelectedImage(mediaItems[product.featured_media]);
                    }
                  }}
                >
                  <div className="relative h-48">
                    {product.featured_media && mediaItems[product.featured_media] && (
                      <Image
                        src={mediaItems[product.featured_media]}
                        alt={product.title.rendered}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-[#2B4257]/10 group-hover:bg-[#2B4257]/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2B4257]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.title.rendered}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Product Code: {product.slug}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-8">
                <button
                  onClick={() => paginate(1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  First
                </button>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Previous
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNumber;
                  if (totalPages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-[#2B4257] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Next
                </button>
                <button
                  onClick={() => paginate(totalPages)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Last
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 