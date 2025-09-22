import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SectionProvider } from "./context/SectionContext";
import ClientLayout from './components/ClientLayout';
import SimpleFooter from './components/SimpleFooter';
import WhatsAppButton from './components/WhatsAppButton';
import TawkToWidget from './components/TawkToWidget';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Vegnar Smart Architectural Hardware | Premium Modern Solutions 2024',
    template: '%s | Vegnar Architectural'
  },
  description: 'Leading manufacturer of smart architectural hardware including IoT railing systems, automated door hardware, energy-efficient window hardware, and sustainable glass fittings. Premium quality solutions for modern smart buildings.',
  keywords: 'smart architectural hardware 2024, IoT railing systems, automated door hardware, energy efficient window hardware, sustainable glass fittings, aluminum railings, stainless steel railings, Vegnar, smart architectural solutions, green building materials, IoT compatible hardware, smart building automation, sustainable construction hardware',
  authors: [{ name: 'Vegnar Architectural' }],
  creator: 'Vegnar Architectural',
  publisher: 'Vegnar Architectural',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vegnararch.com',
    siteName: 'Vegnar Architectural',
    title: 'Vegnar Smart Architectural Hardware | Premium Modern Solutions 2024',
    description: 'Leading manufacturer of smart architectural hardware including IoT railing systems, automated door hardware, and sustainable glass fittings.',
    images: [
      {
        url: 'https://vegnararch.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vegnar Architectural Hardware',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegnar Architectural Hardware | Premium Modern Solutions',
    description: 'Leading manufacturer of premium architectural hardware including railing systems, door hardware, and glass fittings.',
    images: ['https://vegnararch.com/images/og-image.jpg'],
  },
  verification: {
    google: 'lNCnY8r7-XFCmAt5dFHQs8e5UBB0naWp1S_xtDl5y7I',
  },
  alternates: {
    canonical: 'https://vegnararch.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vegnar Architectural',
              url: 'https://vegnararch.com',
              logo: 'https://vegnararch.com/vegnar-architectural-logo.png',
              description: 'Leading manufacturer of smart architectural hardware including IoT railing systems, automated door hardware, and sustainable glass fittings.',
              foundingDate: '2000',
              industry: 'Architectural Hardware Manufacturing',
              numberOfEmployees: '50-100',
              slogan: 'Premium Smart Hardware Solutions for Modern Buildings',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '256, Jasal Complex Nanavati Chowk, 150 Feet Ring Rd, above Axis bank',
                addressLocality: 'Rajkot',
                addressRegion: 'Gujarat',
                postalCode: '360007',
                addressCountry: 'IN'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9998040416',
                contactType: 'customer service',
                email: 'sales@vegnar.com'
              },
              sameAs: [
                'https://vegnararch.com'
              ]
            })
          }}
        />
        
        {/* Error boundary for Tawk.to */}
        <Script id="tawk-error-handler" strategy="beforeInteractive">
          {`
            window.addEventListener('error', function(e) {
              if (e.filename && e.filename.includes('tawk.to')) {
                e.preventDefault();
                return false;
              }
            });
          `}
        </Script>

        {/* ✅ Google Analytics 4 via gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VWX5QZP40B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWX5QZP40B');
          `}
        </Script>
      </head>

      <body className={`${inter.variable} font-sans min-h-screen overflow-auto bg-white`}>
        <SectionProvider>
          <Header />
          <main>
            <Toaster position="top-right" />
            {children}
          </main>
          <WhatsAppButton />
          <TawkToWidget />
          <SimpleFooter />
        </SectionProvider>
      </body>
    </html>
  );
}
