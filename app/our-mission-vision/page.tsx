import { Metadata } from 'next';
import MissionVisionClient from './MissionVisionClient';

export const metadata: Metadata = {
  title: 'Our Mission & Vision | Vegnar Architectural Hardware',
  description: 'Discover Vegnar\'s mission to deliver premium architectural hardware solutions and our vision to be the global leader in innovative hardware design and manufacturing.',
  keywords: 'mission vision, architectural hardware company, Vegnar mission, hardware innovation, quality manufacturing, architectural solutions',
  openGraph: {
    title: 'Our Mission & Vision | Vegnar Architectural Hardware',
    description: 'Discover Vegnar\'s mission and vision for architectural hardware excellence.',
    url: 'https://vegnararch.com/our-mission-vision',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vegnararch.com/our-mission-vision',
  },
};

export default function MissionVisionPage() {
  return <MissionVisionClient />;
}