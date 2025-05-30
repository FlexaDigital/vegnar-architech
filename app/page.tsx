import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ProjectCategories from './components/ProjectCategories';
import ProductCollections from './components/ProductCollections';
import ProductCategories from './components/ProductCategories';
import ProductGallery from './components/ProductGallery';

export default function Home() {
  return (
    <main>
      <Hero />
    
      <AboutSection />
      <ProjectCategories />
      <ProductCollections />
      <ProductCategories />
      <WhyChooseUs />
      <ProductGallery />
    </main>
  );
}
