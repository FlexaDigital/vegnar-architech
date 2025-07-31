import { Metadata } from 'next';
import ExportsClient from './ExportsClient';

export const metadata: Metadata = {
  title: 'Exporter of Glass Hardware Fittings, Stainless Steel & Aluminium Railing System',
  description: 'Leading brand in architectural hardware products exporting door handles, window hinges, glass fittings, digital safes & bathroom accessories to USA, UK, Germany & Europe with DDP service.',
  keywords: 'architectural hardware export USA UK Europe, door handles exporter, window hinges export, glass fittings supplier, digital safes export, bathroom accessories exporter, leading brand architectural hardware products, hardware exporters in india, furniture fittings exporter, DDP export service, architectural hardware exporters from India, railing systems export Germany',
  openGraph: {
    title: 'Exporters of Furniture Fittings & Hardware Fittings | Vegnar',
    description: 'Explore Vegnar\'s export range of architectural hardware, railing systems, glass fittings & bathroom accessories. Global supply with DDP available.',
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