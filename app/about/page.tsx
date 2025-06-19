// 'use client';

// import FullscreenLayout from '../components/FullscreenLayout';
// import AboutHero from '../components/about/AboutHero';
// import AboutSection from '../components/AboutSection';
// import CompanyStory from '../components/about/CompanyStory';
// import CoreValues from '../components/about/CoreValues';

// import Achievements from '../components/about/Achievements';
// import PartnerCTA from '../components/PartnerCTA';
// import MissionVision from '../components/about/MissionVision';

// const sections = [
//   {
//     id: 'hero',
//     component: <AboutHero />
//   },
//   {
//     id: 'about',
//     component: <AboutSection />
//   },
//   {
//     id: 'mission-vision',
//     component: <MissionVision/>
//   },
//   {
//     id: 'story',
//     component: <CompanyStory />
//   },
//   {
//     id: 'values',
//     component: <CoreValues />
//   },
 
//   {
//     id: 'achievements',
//     component: <Achievements />
//   },
//   {
//     id: 'partner',
//     component: <PartnerCTA />
//   }
// ];

// export default function AboutPage() {
//   return <FullscreenLayout sections={sections} />;
// } 

'use client';

import AboutHero from '../components/about/AboutHero';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/about/MissionVision';
import CompanyStory from '../components/about/CompanyStory';
import CoreValues from '../components/about/CoreValues';
import Achievements from '../components/about/Achievements';
import PartnerCTA from '../components/PartnerCTA';

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <CompanyStory />
          <Achievements />
      <CoreValues />
  
      <PartnerCTA />
    </main>
  );
}
