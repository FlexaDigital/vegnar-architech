import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SectionProvider } from "./context/SectionContext";
import ClientLayout from './components/ClientLayout';
import SimpleFooter from './components/SimpleFooter';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen overflow-auto bg-white`}>
        <SectionProvider>
          {/* <ClientLayout>
            <Header />
            <main>{children}</main>
            <Footer/>
          </ClientLayout> */}
           <Header />
            <main>{children}</main>
            <WhatsAppButton />
            <SimpleFooter/>
        </SectionProvider>
      </body>
    </html>
  )
}
