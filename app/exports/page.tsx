import { Metadata } from 'next';
import ExportsClient from './ExportsClient';

export const metadata: Metadata = {
  title: 'Global Exports | Vegnar Architectural Hardware Worldwide',
  description: 'Vegnar exports premium architectural hardware globally. Discover our international presence, export capabilities, and quality products shipped worldwide including railings, door hardware, and glass fittings.',
  keywords: 'architectural hardware exports, global shipping, international hardware supplier, worldwide delivery, export quality products, Vegnar exports, architectural hardware worldwide, international trade',
  openGraph: {
    title: 'Global Exports | Vegnar Architectural Hardware Worldwide',
    description: 'Vegnar exports premium architectural hardware globally with quality products shipped worldwide.',
    url: 'https://vegnararch.com/exports',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vegnararch.com/exports',
  },
};

export default function ExportsPage() {
  return <ExportsClient />;
}