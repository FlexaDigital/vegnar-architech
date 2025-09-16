import ProductDetailClient from './ProductDetailClient';

export default function ProductPage({ searchParams }: { searchParams: { slug?: string } }) {
  const slug = searchParams.slug || '';
  
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <a href="/products" className="text-[#2B4257] hover:underline">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetailClient slug={slug} />;
}