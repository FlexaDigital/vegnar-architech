
import AboutClient from './AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vegnar Architectural Hardware | Leading Manufacturer of Pull Handles & Bathroom Accessories',
  description: 'Learn about Vegnar Architectural Hardware - a leading manufacturer of architectural hardware, bathroom accessories, stainless steel pull handles, mortice locks, glass fittings, railing systems, and digital safes from India.',
  keywords: 'about Vegnar, architectural hardware manufacturer India, bathroom accessories supplier Gujarat, stainless steel pull handles manufacturer, mortice locks company, glass fittings manufacturer, railing system exporter from India, digital safes for home and office, door hinges manufacturer, window hinges supplier, furniture hardware fittings, night latches for wooden doors, Vegnar Architectural products',
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
