import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SiteFooter from '@/src/components/site-footer';
import SiteHeader from '@/src/components/site-header';
import { siteUrl } from '@/src/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const googleVerification = process.env.NEXT_SITE_GOOGLE_VERIFICATION?.trim();
const organizationId = new URL('#organization', siteUrl).href;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'SoTechHo',
      url: siteUrl.href,
      sameAs: ['https://github.com/sotechho'],
    },
    {
      '@type': 'Person',
      name: 'MUKTAR AHMED MOHAMED',
      sameAs: ['https://github.com/MoDev40'],
      worksFor: { '@id': organizationId },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'SoTechHo | Somali Technology Handson',
    template: '%s | SoTechHo',
  },
  description:
    'SoTechHo is a community-driven open-source organization for Somali technologists worldwide. Build software, explore AI, learn together, and contribute to projects with global impact.',
  applicationName: 'SoTechHo',
  keywords: [
    'SoTechHo',
    'software development',
    'software engineering',
    'open-source software',
    'artificial intelligence',
    'AI development',
    'machine learning',
    'Somali software developers',
    'developer community',
  ],
  authors: [{ name: 'MUKTAR AHMED MOHAMED' }],
  creator: 'MUKTAR AHMED MOHAMED',
  publisher: 'SoTechHo',
  category: 'Technology',
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
    url: siteUrl,
    siteName: 'SoTechHo',
    title: 'SoTechHo | Somali Technology Handson',
    description:
      'A community-driven open-source organization for Somali technologists worldwide. Build software, explore AI, and grow together.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoTechHo | Somali Technology Handson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoTechHo | Somali Technology Handson',
    description:
      'A community-driven open-source organization for Somali technologists worldwide.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-[#111] selection:bg-[#111] selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
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
