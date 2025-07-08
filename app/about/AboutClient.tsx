'use client';

import AboutHero from '../components/about/AboutHero';
import AboutSection from '../components/AboutSection';
import MissionVision from '../components/about/MissionVision';
import CompanyStory from '../components/about/CompanyStory';
import CoreValues from '../components/about/CoreValues';
import Achievements from '../components/about/Achievements';
import PartnerCTA from '../components/PartnerCTA';

export default function AboutClient() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <CompanyStory />
      <Achievements/>
      <CoreValues />
      <PartnerCTA />
    </main>
  );
}