import ProductsClient from './ProductsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architectural Hardware Products | Railing Systems, Door Hardware & Glass Fittings',
  description: 'Explore Vegnar\'s complete range of architectural hardware products including aluminum railing systems, stainless steel railings, door hardware, window hardware, and glass fittings.',
  keywords: 'architectural hardware products, railing systems, door hardware, window hardware, glass fittings, aluminum railings, stainless steel railings, pull handles, door hinges, mortice handles, architectural hardware catalog',
  openGraph: {
    title: 'Premium Architectural Hardware Products | Vegnar Collection',
    description: 'Browse our extensive collection of architectural hardware products. Quality railing systems, door hardware, and glass fittings for modern spaces.',
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


export default function ProductsPage() {
  return <ProductsClient />;
}