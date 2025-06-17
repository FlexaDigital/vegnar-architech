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


import metadata from './metadata';

import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import PartnerCTA from './components/PartnerCTA';
import ProductGallery from './components/ProductGallery';

export { metadata };

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
