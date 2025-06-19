// app/e-catalogs/layout.tsx (No 'use client' here)
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Catalogs - Vegnar Architectural Solutions',
  description: 'Download or view our comprehensive e-catalogs for Aluminium Glass Railing Systems, Glass Hardware Fittings, and Stainless Steel Railing Systems. Explore our range of high-quality architectural solutions.',
  keywords: [
    'Vegnar catalogs',
    'architectural hardware catalogs',
    'railing system PDFs',
    'glass hardware fittings',
    'modern railing systems',
    'door handles',
    'hardware brochures',
    'interior hardware catalogs',
    'Vegnar India',
  ],
  openGraph: {
    title: 'E-Catalogs - Vegnar Architectural Solutions',
    description: 'Download or view our comprehensive e-catalogs for Aluminium Glass Railing Systems, Glass Hardware Fittings, and Stainless Steel Railing Systems. Explore our range of high-quality architectural solutions.',
    url: 'https://www.vegnar.com/e-catalogs', // Replace with your actual URL
    type: 'website',
    images: [
      {
        url: 'https://www.vegnar.com/images/og-image-catalogs.jpg', // Replace with a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: 'Vegnar E-Catalogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Catalogs - Vegnar Architectural Solutions',
    description: 'Download or view our comprehensive e-catalogs for Aluminium Glass Railing Systems, Glass Hardware Fittings, and Stainless Steel Railing Systems. Explore our range of high-quality architectural solutions.',
    images: ['https://www.vegnar.com/images/twitter-image-catalogs.jpg'], // Replace with a relevant image for Twitter
  },
};

export default function ECatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}