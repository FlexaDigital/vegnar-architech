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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/product-category'),
          fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/product')
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
      <div className="h-screen w-full flex items-center justify-center bg-white">
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

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-12 justify-center">
          {mainCategories.map((category, index) => (
            <motion.button
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setActiveTab(category.slug);
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Content with Sidebar */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-64 shrink-0"
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Subcategories
              </h3>
              <div className="space-y-2">
                {subcategories.map((sub, index) => (
                  <motion.button
                    key={sub.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setActiveSubcategory(sub.slug)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSubcategory === sub.slug
                        ? 'bg-[#2B4257] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {sub.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            {mainCategories.map((category) => (
              activeTab === category.slug && (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.name}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden group"
                      >
                        <Link href={product.link}>
                          <div className="relative h-56">
                            {product.featured_media && mediaItems[product.featured_media] && (
                              <Image
                                src={mediaItems[product.featured_media]}
                                alt={product.title.rendered}
                                fill
                                className="object-cover"
                              />
                            )}
                            <div className="absolute inset-0 bg-[#2B4257]/10 group-hover:bg-[#2B4257]/20 transition-colors duration-300" />
                          </div>
                          <div className="p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {product.title.rendered}
                            </h4>
                            <p className="text-gray-600">
                              Product Code: {product.slug}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 