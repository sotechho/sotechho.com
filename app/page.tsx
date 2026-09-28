import { HomeScreen } from '@/src/components/screens';
import { createPageMetadata, PAGE_SEO } from '@/src/lib/seo';

export const metadata = createPageMetadata(PAGE_SEO.home);

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white">
      <HomeScreen />
    </main>
  );
}
