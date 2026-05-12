import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'xperc — AI Strategy & Implementation for Traditional Businesses',
  description: 'From strategy to real deployment. Book your free 60-minute AI Audit with our specialists and get a concrete, business-specific AI roadmap.',
  keywords: ['AI', 'consulting', 'Vietnam', 'business', 'automation', 'SME', 'digital transformation'],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased bg-bg-primary text-text-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
