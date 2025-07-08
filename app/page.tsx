// import metadata from './metadata';

// import Hero from './components/Hero';
// import ProductCategories from './components/ProductCategories';
// import AboutSection from './components/AboutSection';
// import WhyChooseUs from './components/WhyChooseUs';
// import PartnerCTA from './components/PartnerCTA';
// import FullscreenLayout from './components/FullscreenLayout';
// import ProductGallery from './components/ProductGallery';

// export { metadata };

// const sections = [
// 	{
// 		id: 'hero',
// 		component: <Hero />,
// 	},
// 	{
// 		id: 'about',
// 		component: <AboutSection />,
// 	},
// 	{
// 		id: 'products',
// 		component: <ProductCategories />,
// 	},
// 	{
// 		id: 'gallery',
// 		component: <ProductGallery />,
// 	},
// 	{
// 		id: 'why-choose-us',
// 		component: <WhyChooseUs />,
// 	},
// 	{
// 		id: 'partner',
// 		component: <PartnerCTA />,
// 	},
// ];

// export default function Home() {
// 	return <FullscreenLayout sections={sections} />;
// }


import { Metadata } from 'next';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import PartnerCTA from './components/PartnerCTA';
import ProductGallery from './components/ProductGallery';

export const metadata: Metadata = {
  title: 'Vegnar Architectural Hardware | Premium Modern Solutions',
  description: 'Leading manufacturer of premium architectural hardware including railing systems, door hardware, window hardware, and glass fittings. Quality solutions for modern spaces in India.',
  keywords: 'architectural hardware manufacturer, railing systems India, door hardware, window hardware, glass fittings, aluminum railings, stainless steel railings, premium hardware solutions, Vegnar architectural',
  openGraph: {
    title: 'Vegnar Architectural Hardware | Premium Modern Solutions',
    description: 'Leading manufacturer of premium architectural hardware. Quality railing systems, door hardware, and glass fittings for modern spaces.',
    url: 'https://vegnararch.com',
    siteName: 'Vegnar Architectural',
    type: 'website',
    images: [
      {
        url: 'https://vegnararch.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vegnar Architectural Hardware Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegnar Architectural Hardware | Premium Solutions',
    description: 'Premium architectural hardware manufacturer. Railing systems, door hardware, and glass fittings.',
  },
  alternates: {
    canonical: 'https://vegnararch.com',
  },
};

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<AboutSection />
			<ProductCategories />
			<ProductGallery />
			<WhyChooseUs />
			<PartnerCTA />
		</div>
	);
}
