'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative w-40 h-12"
      >
        <Image
          src="/vegnar-architectural-logo.png"
          alt="Vegnar Architectural"
          fill
          className="object-contain brightness-0 invert"
          priority
          unoptimized
        />
      </motion.div>
    </Link>
  );
} 