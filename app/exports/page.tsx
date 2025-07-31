import { Metadata } from 'next';
import ExportsClient from './ExportsClient';

export const metadata: Metadata = {
  title: 'Global Smart Hardware Exports 2024 | Vegnar Architectural Hardware Worldwide',
  description: 'Vegnar exports premium smart architectural hardware globally. Discover our international presence, sustainable export capabilities, and eco-friendly quality products shipped worldwide including IoT railings, smart door hardware, and energy-efficient glass fittings.',
  keywords: 'smart architectural hardware exports 2024, global sustainable shipping, international IoT hardware supplier, worldwide eco-friendly delivery, export quality smart products, Vegnar exports, smart architectural hardware worldwide, international green trade, sustainable building materials export, IoT hardware global supplier',
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