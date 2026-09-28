import { JoinScreen } from '@/src/components/screens';
import { createPageMetadata, PAGE_SEO } from '@/src/lib/seo';

export const metadata = createPageMetadata(PAGE_SEO.join);

export default function JoinUsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white">
      <JoinScreen />
    </main>
  );
}
