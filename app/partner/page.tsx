import PartnerClient from './PartnerClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner with Vegnar Architectural Hardware | Business Partnership Opportunities',
  description: 'Join Vegnar\'s global partner network. Become a distributor, retailer, or importer of premium architectural hardware. Grow your business with our innovative solutions.',
  keywords: 'Vegnar partnership, architectural hardware distributor, hardware retailer partnership, importer opportunities, business partnership, architectural hardware dealer, Vegnar distributor program, hardware supplier partnership',
  openGraph: {
    title: 'Partner with Vegnar | Grow Your Architectural Hardware Business',
    description: 'Join our global partner network. Exclusive opportunities for distributors, retailers, and importers of premium architectural hardware.',
    url: 'https://vegnararch.com/partner',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Partner with Vegnar Architectural Hardware',
    description: 'Business partnership opportunities in architectural hardware. Join our global network.',
  },
  alternates: {
    canonical: 'https://vegnararch.com/partner',
  },
};

export default function PartnerPage() {
  return <PartnerClient />;
}