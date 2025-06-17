'use client';

import ProductCategoriesPage from '../components/ProductCategoriesPage';

import SimpleFooter from '../components/SimpleFooter';

function ProductHero() {
  return (
    <div className="bg-[#2B4257] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 sm:mt-12">
  Our Products
</h1>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ProductHero />
      <div className="flex-1">
        <ProductCategoriesPage />
      </div>
      <SimpleFooter/>
    </div>
  );
} 