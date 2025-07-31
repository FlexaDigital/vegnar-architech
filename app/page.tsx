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
  title: 'Architectural Hardware, Bathroom Accessories & Railing Systems – Vegnar Architectural',
  description: 'Explore premium architectural hardware, bathroom accessories, pull handles, mortice locks, glass fittings, railing systems & digital safes by Vegnar.',
  keywords: 'architectural hardware, bathroom accessories, railing systems, pull handles, mortice locks, door hinges, window hinges, glass fittings, digital safes for home and office, stainless steel pull handles, modern bathroom hardware sets, balcony railing hardware, concealed glass door hinges, mortice handle with lock set, furniture hardware fittings, night latches for wooden doors, architectural hardware manufacturer India, bathroom accessories supplier Gujarat, railing system exporter from India, Vegnar Architectural products',
  openGraph: {
    title: 'Architectural Hardware, Bathroom Accessories & Railing Systems – Vegnar Architectural',
    description: 'Explore premium architectural hardware, bathroom accessories, pull handles, mortice locks, glass fittings, railing systems & digital safes by Vegnar.',
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
    title: 'Architectural Hardware, Bathroom Accessories & Railing Systems – Vegnar',
    description: 'Premium architectural hardware, bathroom accessories, pull handles, mortice locks, glass fittings & digital safes.',
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
