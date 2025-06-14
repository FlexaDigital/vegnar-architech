'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import '../products/products.css';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/product-category?per_page=100'),
          fetch('https://cms-arch.flexadigital.com/wp-json/wp/v2/product?per_page=100&_fields=id,title,content,slug,featured_media,product-category,link,acf')
        ]);

        const categoriesData: Category[] = await categoriesResponse.json();
        const productsData: Product[] = await productsResponse.json();
        
        // Get total pages from headers
        const totalProducts = productsResponse.headers.get('X-WP-Total');
        const totalPages = parseInt(productsResponse.headers.get('X-WP-TotalPages') || '1');
        console.log('Total products:', totalProducts, 'Total pages:', totalPages);

        // Fetch remaining pages if any
        let allProducts = [...productsData];
        if (totalPages > 1) {
          for (let page = 2; page <= totalPages; page++) {
            try {
              const nextPageResponse = await fetch(`https://cms-arch.flexadigital.com/wp-json/wp/v2/product?per_page=100&page=${page}`);
              const nextPageData = await nextPageResponse.json();
              allProducts = [...allProducts, ...nextPageData];
            } catch (error) {
              console.error(`Error fetching page ${page}:`, error);
            }
          }
        }

        // Log category structure for debugging
        const mainCategories = categoriesData.filter(cat => cat.parent === 0);
        console.log('Main Categories:', mainCategories.length);
        mainCategories.forEach(main => {
          const subs = categoriesData.filter(cat => cat.parent === main.id);
          console.log(`${main.name} has ${subs.length} subcategories`);
        });
        
        // Fetch media items for products with featured media
        const mediaIds = allProducts
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
        setCategories(categoriesData);
        setProducts(allProducts);
        
        // Set initial category and subcategory
        if (mainCategories.length > 0) {
          setActiveTab(mainCategories[0].slug);
          const firstCategorySubcategories = categoriesData.filter(
            cat => cat.parent === mainCategories[0].id
          );
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

  // Modify the filtering logic
  const filteredProducts = products.filter(product => {
    if (!activeTab) return true;
    
    const activeCategoryObj = categories.find(cat => cat.slug === activeTab);
    if (!activeCategoryObj) return false;

    if (activeSubcategory) {
      const subCategoryObj = categories.find(cat => cat.slug === activeSubcategory);
      return subCategoryObj ? product['product-category'].includes(subCategoryObj.id) : false;
    }

    // If no subcategory selected, show all products in the main category and its subcategories
    const subCategories = categories.filter(cat => cat.parent === activeCategoryObj.id);
    const validCategoryIds = [activeCategoryObj.id, ...subCategories.map(sub => sub.id)];
    return product['product-category'].some(catId => validCategoryIds.includes(catId));
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="products-page">
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 cursor-pointer"
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

      {/* Category Tabs */}
      <div className="category-tabs">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  setActiveSubcategory('');
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
      </div>

      {/* Main Content */}
      <div className="products-content">
        <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
            {/* Sidebar */}
            <div className="product-sidebar">
              {/* Mobile Subcategories */}
              <div className="mobile-subcategories">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="mobile-menu-button"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {activeCategory ? activeCategory.name : 'Categories'}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-600 transform transition-transform ${
                      isMobileMenuOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mb-4 overflow-hidden"
                    >
                      <div className="bg-white rounded-xl shadow-lg p-4">
                        <div className="mobile-menu-content">
                          {activeCategory && (
                            <button
                              onClick={() => {
                                setActiveSubcategory('');
                                setCurrentPage(1);
                                setIsMobileMenuOpen(false);
                              }}
                              className={`flex-none whitespace-nowrap px-4 py-2 rounded-lg text-sm ${
                                !activeSubcategory
                                  ? 'bg-[#2B4257] text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              All {activeCategory.name}
                            </button>
                          )}
                          {subcategories.map((sub) => {
                            const subcategoryProductCount = products.filter(
                              product => product['product-category'].includes(sub.id)
                            ).length;

                            return (
                              <button
                                key={sub.slug}
                                onClick={() => {
                                  setActiveSubcategory(sub.slug);
                                  setCurrentPage(1);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`flex-none whitespace-nowrap px-4 py-2 rounded-lg text-sm ${
                                  activeSubcategory === sub.slug
                                    ? 'bg-[#2B4257] text-white'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {sub.name} ({subcategoryProductCount})
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Sidebar */}
              <div className="desktop-sidebar">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {activeCategory ? activeCategory.name : 'Categories'}
                  </h3>
                  <div className="subcategories-scroll">
                    {activeCategory && (
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
                        <div className="flex justify-between items-center">
                          <span>All {activeCategory.name}</span>
                          <span className={`text-sm ${
                            !activeSubcategory ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            ({products.filter(product => 
                              product['product-category'].some(catId => 
                                [activeCategory.id, ...subcategories.map(sub => sub.id)].includes(catId)
                              )
                            ).length})
                          </span>
                        </div>
                      </button>
                    )}
                    {subcategories.map((sub) => {
                      const subcategoryProductCount = products.filter(
                        product => product['product-category'].includes(sub.id)
                      ).length;

                      return (
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
                          <div className="flex justify-between items-center">
                            <span>{sub.name}</span>
                            <span className={`text-sm ${
                              activeSubcategory === sub.slug
                                ? 'text-white/70'
                                : 'text-gray-500'
                            }`}>
                              ({subcategoryProductCount})
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Area */}
            <div className="flex-1 min-w-0">
              {/* Products Count and Controls */}
              <div className="bg-white rounded-lg shadow-sm mb-6 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm sm:text-base text-gray-600">
                    Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                  </div>
                  <div className="flex items-center gap-4">
                    <select 
                      value={productsPerPage}
                      onChange={(e) => {
                        setProductsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      className="px-3 py-2 sm:px-4 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B4257]"
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
              <div className="products-grid">
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="product-card"
                    onClick={() => {
                      if (product.featured_media && mediaItems[product.featured_media]) {
                        setSelectedImage(mediaItems[product.featured_media]);
                      }
                    }}
                  >
                    <div className="product-image-container" style={{ height: '260px', minHeight: '200px', position: 'relative' }}>
                      {product.featured_media && mediaItems[product.featured_media] ? (
                        <Image
                          src={mediaItems[product.featured_media]}
                          alt={product.title.rendered}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <svg 
                            className="w-12 h-1 text-gray-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {product.title.rendered}
                      </h4>
                      {product.acf?.product_code && (
                        <p className="text-sm text-gray-600 mb-2">
                          Product Code: {product.acf.product_code}
                        </p>
                      )}
                      <div className="text-sm text-gray-600 space-y-2">
                        {product.acf?.specifications && (
                          <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: product.acf.specifications }} />
                        )}
                        {product.acf?.features && (
                          <div className="line-clamp-2 text-[#2B4257]" dangerouslySetInnerHTML={{ __html: product.acf.features }} />
                        )}
                        {product.acf?.dimensions && (
                          <p className="text-xs text-gray-500">
                            Dimensions: {product.acf.dimensions}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <button
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg text-sm sm:text-base sm:px-4 ${
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
                className={`px-3 py-2 rounded-lg text-sm sm:text-base sm:px-4 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Previous
              </button>
              
              <div className="hidden sm:flex items-center gap-2">
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
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-[#2B4257] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              {/* Mobile current page indicator */}
              <span className="sm:hidden text-sm">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg text-sm sm:text-base sm:px-4 ${
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
                className={`px-3 py-2 rounded-lg text-sm sm:text-base sm:px-4 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Last
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}