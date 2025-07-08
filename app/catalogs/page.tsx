import CatalogsClient from './CatalogsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download E-Catalogs | Vegnar Architectural Hardware Product Catalogs',
  description: 'Download comprehensive e-catalogs of Vegnar architectural hardware products. Browse aluminum railing systems, glass hardware fittings, and stainless steel railing catalogs.',
  keywords: 'Vegnar catalog download, architectural hardware catalog, railing system catalog, glass hardware catalog, stainless steel railing catalog, product brochure, hardware specifications, e-catalog download',
  openGraph: {
    title: 'Vegnar E-Catalogs | Complete Product Range Downloads',
    description: 'Access detailed product catalogs for architectural hardware. Download specifications, images, and technical details.',
    url: 'https://vegnararch.com/catalogs',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Vegnar Product Catalogs | Download E-Catalogs',
    description: 'Download comprehensive architectural hardware catalogs. Complete product specifications and details.',
  },
  alternates: {
    canonical: 'https://vegnararch.com/catalogs',
  },
};

export default function CatalogsPage() {
  return <CatalogsClient />;
}
