'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const showFooter = pathname === '/' || pathname === '/about'; // Show on home and about

  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default ClientLayout;
