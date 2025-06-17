import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SectionProvider } from "./context/SectionContext";
import ClientLayout from './components/ClientLayout';
import SimpleFooter from './components/SimpleFooter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'Your company description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SectionProvider>
          {/* <ClientLayout>
            <Header />
            <main>{children}</main>
            <Footer/>
          </ClientLayout> */}
           <Header />
            <main>{children}</main>
            <SimpleFooter/>
        </SectionProvider>
      </body>
    </html>
  )
}
