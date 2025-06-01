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
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
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
    if (currentSectionIndex !== sections.length - 1) {
      setShowFooter(false);
    }
  }, [currentSectionIndex, sections.length]);

  useEffect(() => {
    // Disable body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleScroll = (e: WheelEvent) => {
    if (isTransitioning) return;
    e.preventDefault();

    const isLastSection = currentSectionIndex === sections.length - 1;
    
    if (isLastSection) {
      if (e.deltaY > 0 && !showFooter) {
        setShowFooter(true);
        return;
      } else if (e.deltaY < 0 && showFooter) {
        setShowFooter(false);
        return;
      }
    }

    const direction = e.deltaY > 0 ? 1 : -1;
    if (!showFooter) {
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
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;

    const diffX = touchStart.x - touchEnd.x;
    const diffY = touchStart.y - touchEnd.y;

    // Check if the swipe was more vertical than horizontal
    if (Math.abs(diffY) > Math.abs(diffX)) {
      const minSwipeDistance = 50;
      const direction = diffY > 0 ? 1 : -1;
      const isLastSection = currentSectionIndex === sections.length - 1;

      if (Math.abs(diffY) > minSwipeDistance) {
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
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSectionIndex, isTransitioning, showFooter, touchStart, touchEnd]);

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

  const handleGoToTop = () => {
    if (!isTransitioning && currentSectionIndex !== 0) {
      setCurrentSectionIndex(0);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-white touch-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: showFooter && currentSectionIndex === sections.length - 1 ? -200 : 0 
          }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full overflow-hidden"
        >
          <div className="w-full h-full overflow-y-auto">
            {sections[currentSectionIndex].component}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Back to Top Button */}
      {currentSectionIndex > 0 && !showFooter && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={handleGoToTop}
          className="fixed top-4 right-4 sm:top-8 sm:right-8 bg-[#2B4257] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg hover:bg-[#1a2834] transition-all duration-300 flex items-center gap-2 z-50 text-sm sm:text-base"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="font-medium">Top</span>
        </motion.button>
      )}

      {/* Navigation Indicators */}
      <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 sm:gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (!isTransitioning && !showFooter) {
                setCurrentSectionIndex(index);
              }
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSectionIndex && !showFooter
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