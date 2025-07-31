import React from 'react';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vegnar Smart Architectural Hardware | Expert Consultation Available',
  description: 'Contact Vegnar for premium smart architectural hardware solutions. Reach our IoT hardware experts in Rajkot, Gujarat for sustainable railing systems, smart door hardware, energy-efficient glass fittings and more. Call +91 9998040416',
  keywords: 'contact Vegnar, smart architectural hardware contact, Vegnar Rajkot office, IoT hardware supplier contact, sustainable railing system inquiry, smart door hardware contact, energy efficient glass fittings contact, architectural hardware Gujarat, smart building consultation, green hardware solutions',
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