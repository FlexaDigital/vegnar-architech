
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vegnar Architectural Hardware | Leading Manufacturer Since Years',
  description: 'Learn about Vegnar Architectural Hardware - a leading manufacturer of premium railing systems, door hardware, and glass fittings. Discover our mission, vision, and commitment to quality.',
  keywords: 'about Vegnar, architectural hardware manufacturer, Vegnar company history, railing system manufacturer, door hardware company, glass fittings manufacturer, architectural hardware India, premium hardware solutions',
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
