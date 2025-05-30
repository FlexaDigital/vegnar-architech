'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSection } from '../context/SectionContext';

interface Section {
  id: string;
  component: ReactNode;
}

interface FullscreenLayoutProps {
  sections: Section[];
}

export default function FullscreenLayout({ sections }: FullscreenLayoutProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const { setCurrentSection, setTotalSections } = useSection();

  useEffect(() => {
    // Set total sections count
    setTotalSections(sections.length);
  }, [sections.length, setTotalSections]);

  useEffect(() => {
    // Update the section context whenever the section changes or footer visibility changes
    setCurrentSection(showFooter ? sections.length : currentSectionIndex);
  }, [currentSectionIndex, showFooter, sections.length, setCurrentSection]);

  useEffect(() => {
    // Reset footer visibility when changing sections
    setShowFooter(false);
  }, [currentSectionIndex]);

  useEffect(() => {
    // Disable body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleScroll = (e: WheelEvent) => {
    if (isTransitioning) return;

    const isLastSection = currentSectionIndex === sections.length - 1;
    
    if (isLastSection) {
      if (e.deltaY > 0 && !showFooter) {
        // Scrolling down on last section, show footer
        setShowFooter(true);
        return;
      } else if (e.deltaY < 0 && showFooter) {
        // Scrolling up on last section with footer shown, hide footer
        setShowFooter(false);
        return;
      }
    }

    const direction = e.deltaY > 0 ? 1 : -1;
    if (!showFooter) { // Only change section if footer is not shown
      changeSection(direction);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isTransitioning) return;

    const isLastSection = currentSectionIndex === sections.length - 1;

    if (isLastSection) {
      if (e.key === 'ArrowDown' && !showFooter) {
        setShowFooter(true);
        return;
      } else if (e.key === 'ArrowUp' && showFooter) {
        setShowFooter(false);
        return;
      }
    }

    if (!showFooter) {
      if (e.key === 'ArrowDown') {
        changeSection(1);
      } else if (e.key === 'ArrowUp') {
        changeSection(-1);
      }
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (isTransitioning) return;

    const touchEnd = e.changedTouches[0].clientY;
    const direction = touchStart > touchEnd ? 1 : -1;
    const isLastSection = currentSectionIndex === sections.length - 1;
    
    // Only trigger if the swipe is significant enough
    if (Math.abs(touchStart - touchEnd) > 50) {
      if (isLastSection) {
        if (direction > 0 && !showFooter) {
          setShowFooter(true);
          return;
        } else if (direction < 0 && showFooter) {
          setShowFooter(false);
          return;
        }
      }

      if (!showFooter) {
        changeSection(direction);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSectionIndex, isTransitioning, showFooter]);

  const changeSection = (direction: number) => {
    const nextIndex = currentSectionIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < sections.length) {
      setIsTransitioning(true);
      setCurrentSectionIndex(nextIndex);
      
      // Reset transition lock after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {sections[currentSectionIndex].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (!isTransitioning && !showFooter) {
                setCurrentSectionIndex(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSectionIndex
                ? 'bg-[#2B4257] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 