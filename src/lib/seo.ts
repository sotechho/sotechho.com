import type { Metadata } from 'next';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = new URL(
  configuredSiteUrl
    ? /^https?:\/\//i.test(configuredSiteUrl)
      ? configuredSiteUrl
      : `https://${configuredSiteUrl}`
    : 'https://sotechho.com'
);

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'SoTechHo | Somali Technology Handson',
    description:
      'A community-driven open-source organization for Somali technologists worldwide. Build software, explore AI, learn together, and contribute to projects with global impact.',
    priority: 1,
  },
  about: {
    path: '/about/',
    title: 'About SoTechHo',
    description:
      'Learn about SoTechHo, an open-source organization cultivating a Somali-rooted technology ecosystem through shared learning and global collaboration.',
    priority: 0.8,
  },
  whatWeDo: {
    path: '/what-we-do/',
    title: 'What We Do',
    description:
      'Explore SoTechHo open-source projects, collaborative software development, mentorship, AI learning, and a global network of Somali technologists.',
    priority: 0.8,
  },
  join: {
    path: '/join-us/',
    title: 'Join SoTechHo',
    description:
      'Join SoTechHo as a developer, designer, writer, or contributor. Explore open-source projects, meet the community, and start contributing.',
    priority: 0.8,
  },
  community: {
    path: '/community/',
    title: 'SoTechHo Community',
    description:
      'Connect with Somali technologists worldwide and help build an open, welcoming technology community through software and AI.',
    priority: 0.7,
  },
} as const;

type PageSeo = (typeof PAGE_SEO)[keyof typeof PAGE_SEO];

export function createPageMetadata(page: PageSeo): Metadata {
  const isHomePage = page.path === '/';

  return {
    title: isHomePage ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: page.path,
      siteName: 'SoTechHo',
      title: page.title,
      description: page.description,
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
      title: page.title,
      description: page.description,
      images: ['/og-image.png'],
    },
  };
}
