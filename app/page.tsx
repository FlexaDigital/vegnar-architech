'use client';

import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import PartnerCTA from './components/PartnerCTA';
import FullscreenLayout from './components/FullscreenLayout';
import ProductGallery from './components/ProductGallery';

const sections = [
  {
    id: 'hero',
    component: <Hero />
  },
  {
    id: 'about',
    component: <AboutSection />
  },
  {
    id: 'products',
    component: <ProductCategories />
  },
  {
    id: 'gallery',
    component: <ProductGallery />
  },
  {
    id: 'about',
    component: <AboutSection />
  },
  {
    id: 'why-choose-us',
    component: <WhyChooseUs />
  },
  {
    id: 'partner',
    component: <PartnerCTA />
  }
];

export default function Home() {
  return <FullscreenLayout sections={sections} />;
}
