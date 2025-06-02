'use client';

import FullscreenLayout from '../components/FullscreenLayout';
import AboutHero from '../components/about/AboutHero';
import AboutSection from '../components/AboutSection';
import CompanyStory from '../components/about/CompanyStory';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import Achievements from '../components/about/Achievements';
import PartnerCTA from '../components/PartnerCTA';

const sections = [
  {
    id: 'hero',
    component: <AboutHero />
  },
  {
    id: 'about',
    component: <AboutSection />
  },
  {
    id: 'story',
    component: <CompanyStory />
  },
  {
    id: 'values',
    component: <CoreValues />
  },
  {
    id: 'team',
    component: <TeamSection />
  },
  {
    id: 'achievements',
    component: <Achievements />
  },
  {
    id: 'partner',
    component: <PartnerCTA />
  }
];

export default function AboutPage() {
  return <FullscreenLayout sections={sections} />;
} 