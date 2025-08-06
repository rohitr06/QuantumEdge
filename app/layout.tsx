import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QuantumEdge - Quantum-Powered Solutions',
  description: 'Revolutionizing the future with quantum-powered technology solutions. Experience the next generation of innovation.',
  keywords: ['quantum computing', 'technology', 'innovation', 'next.js', 'full-stack'],
  authors: [{ name: 'QuantumEdge Team' }],
  creator: 'QuantumEdge',
  metadataBase: new URL('https://quantumedge.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumedge.com',
    title: 'QuantumEdge - Quantum-Powered Solutions',
    description: 'Revolutionizing the future with quantum-powered technology solutions.',
    siteName: 'QuantumEdge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumEdge - Quantum-Powered Solutions',
    description: 'Revolutionizing the future with quantum-powered technology solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}