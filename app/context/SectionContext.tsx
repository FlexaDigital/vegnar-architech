'use client';

import { createContext, useContext, useState } from 'react';

interface SectionContextType {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  totalSections: number;
  setTotalSections: (total: number) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [totalSections, setTotalSections] = useState(0);

  return (
    <SectionContext.Provider value={{ 
      currentSection, 
      setCurrentSection, 
      totalSections, 
      setTotalSections 
    }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
} 