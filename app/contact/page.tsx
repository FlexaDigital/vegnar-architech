import React from 'react';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vegnar Architectural Hardware | Get in Touch with Our Experts',
  description: 'Contact Vegnar for premium architectural hardware solutions. Reach our experts in Rajkot, Gujarat for railing systems, door hardware, glass fittings and more. Call +91 9998040416',
  keywords: 'contact Vegnar, architectural hardware contact, Vegnar Rajkot office, hardware supplier contact, railing system inquiry, door hardware contact, glass fittings contact, architectural hardware Gujarat',
  openGraph: {
    title: 'Contact Vegnar Architectural Hardware | Expert Support Available',
    description: 'Get in touch with Vegnar architectural hardware experts. Located in Rajkot, Gujarat. Professional support for all your hardware needs.',
    url: 'https://vegnararch.com/contact',
    siteName: 'Vegnar Architectural',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Vegnar Architectural Hardware',
    description: 'Professional architectural hardware support. Contact our Rajkot office for expert assistance.',
  },
  alternates: {
    canonical: 'https://vegnararch.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
} 