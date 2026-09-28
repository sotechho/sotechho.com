import { AboutScreen } from '@/src/components/screens';
import { createPageMetadata, PAGE_SEO } from '@/src/lib/seo';

export const metadata = createPageMetadata(PAGE_SEO.about);

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white">
      <AboutScreen />
    </main>
  );
}
