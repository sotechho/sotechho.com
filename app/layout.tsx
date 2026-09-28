import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SiteFooter from '@/src/components/site-footer';
import SiteHeader from '@/src/components/site-header';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SoTechHo | Somali Technology Handson',
  description:
    'A community-driven open-source organization for Somali technologists worldwide.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-[#111] selection:bg-[#111] selection:text-white`}
      >
        <Link href="#main-content" className="skip-link">
          Skip to main content
        </Link>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
