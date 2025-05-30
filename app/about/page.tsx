'use client';

import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import Achievements from '../components/about/Achievements';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <TeamSection />
      <Achievements />
    </main>
  );
} 