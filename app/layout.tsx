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

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your Site Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification for Search Console */}
        <meta
          name="google-site-verification"
          content="lNCnY8r7-XFCmAt5dFHQs8e5UBB0naWp1S_xtDl5y7I"
        />

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

      <body className={`${inter.className} min-h-screen overflow-auto bg-white`}>
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
