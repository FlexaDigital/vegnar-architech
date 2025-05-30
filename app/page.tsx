'use client';

import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import PartnerCTA from './components/PartnerCTA';
import FullscreenLayout from './components/FullscreenLayout';

const sections = [
  {
    id: 'hero',
    component: <Hero />
  },
  {
    id: 'products',
    component: <ProductCategories />
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
