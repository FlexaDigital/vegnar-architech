
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vegnar Architectural Hardware | Leading Smart Hardware Manufacturer Since 2000',
  description: 'Learn about Vegnar Architectural Hardware - a pioneering manufacturer of smart railing systems, IoT door hardware, and sustainable glass fittings. Discover our mission, vision, and commitment to innovation and environmental responsibility.',
  keywords: 'about Vegnar, smart architectural hardware manufacturer, Vegnar company history, sustainable railing system manufacturer, IoT door hardware company, eco-friendly glass fittings manufacturer, architectural hardware India, premium smart hardware solutions, green building materials manufacturer, sustainable construction hardware',
  openGraph: {
    title: 'About Vegnar Architectural Hardware | Premium Quality Since Years',
    description: 'Discover Vegnar\'s journey as a leading architectural hardware manufacturer. Quality products, innovative solutions, and customer satisfaction.',
    url: 'https://vegnararch.com/about',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Vegnar Architectural Hardware',
    description: 'Leading manufacturer of premium architectural hardware solutions. Quality, innovation, and excellence.',
  },
  alternates: {
    canonical: 'https://vegnararch.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
