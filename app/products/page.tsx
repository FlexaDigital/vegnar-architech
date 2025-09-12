import ProductsClient from './ProductsClient';
import ProductDetailClient from './ProductDetailClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Architectural Hardware Products 2024 | Modern Railing Systems & IoT Door Hardware',
  description: 'Explore Vegnar\'s complete range of smart architectural hardware products including sustainable aluminum railing systems, energy-efficient stainless steel railings, IoT-compatible door hardware, smart window hardware, and contemporary glass fittings for modern buildings.',
  keywords: 'smart architectural hardware products 2024, modern railing systems, IoT door hardware, energy efficient window hardware, sustainable glass fittings, aluminum railings, stainless steel railings, smart pull handles, automated door hinges, digital mortice handles, contemporary hardware catalog, green building hardware, smart building solutions, architectural hardware trends 2024',
  openGraph: {
    title: 'Smart Architectural Hardware Products 2024 | Vegnar Collection',
    description: 'Browse our extensive collection of smart architectural hardware products. Sustainable railing systems, IoT door hardware, and energy-efficient glass fittings for contemporary spaces.',
    url: 'https://vegnararch.com/products',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architectural Hardware Products | Vegnar',
    description: 'Premium railing systems, door hardware, and glass fittings. Explore our complete product range.',
  },
  alternates: {
    canonical: 'https://vegnararch.com/products',
  },
};


export default function ProductsPage({ searchParams }: { searchParams: { slug?: string; image?: string } }) {
  if (searchParams.slug) {
    return <ProductDetailClient slug={searchParams.slug} imageUrl={searchParams.image} />;
  }
  return <ProductsClient />;
}