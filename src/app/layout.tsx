import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ECZ-ID Developer Gateway | Trust Infrastructure for the Machine Economy',
    template: '%s | ECZ-ID Developer Gateway',
  },
  description: 'ECZ-ID is trust infrastructure for AI agents, autonomous systems, IoT devices, products, and every entity in the machine economy. Start building verified, trusted systems today.',
  keywords: ['ECZ-ID', 'trust infrastructure', 'machine economy', 'AI agents', 'verified identity', 'digital product passport', 'autonomous systems', 'IoT identity', 'EcoCitizenz'],
  authors: [{ name: 'EcoCitizenz' }],
  creator: 'EcoCitizenz',
  publisher: 'EcoCitizenz',
  metadataBase: new URL('https://developers.ecocitizenz.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://developers.ecocitizenz.com',
    siteName: 'ECZ-ID Developer Gateway',
    title: 'ECZ-ID Developer Gateway | Trust Infrastructure for the Machine Economy',
    description: 'Verified identity for every agent, device, product, and system. Start building trust infrastructure today.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ECZ-ID Developer Gateway' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECZ-ID Developer Gateway',
    description: 'Trust infrastructure for the machine economy.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
