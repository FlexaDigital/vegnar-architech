'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface Achievement {
  number: number;
  suffix: string;
  title: string;
  description: string;
}

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const achievements: Achievement[] = [
  {
    number: 2000,
    suffix: '+',
    title: 'Projects Completed',
    description: 'Successfully delivered architectural solutions worldwide'
  },
  {
    number: 50,
    suffix: '+',
    title: 'Countries Served',
    description: 'Global presence and international expertise'
  },
  {
    number: 98,
    suffix: '%',
    title: 'Client Satisfaction',
    description: 'Consistently exceeding client expectations'
  },
  {
    number: 25,
    suffix: '+',
    title: 'Industry Awards',
    description: 'Recognition for excellence and innovation'
  }
];

const Counter = ({ target, suffix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * target));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    if (isVisible) {
      animationFrame = requestAnimationFrame(updateCount);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function Achievements() {
  return (
    <section className="py-20 bg-[#2B4257] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-white/80">
            Milestones that showcase our commitment to excellence and innovation
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  <Counter
                    target={achievement.number}
                    suffix={achievement.suffix}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-white/80">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
} 