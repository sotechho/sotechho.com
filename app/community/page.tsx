import { CommunityScreen } from '@/src/components/screens';
import { createPageMetadata, PAGE_SEO } from '@/src/lib/seo';

export const metadata = createPageMetadata(PAGE_SEO.community);

export default function CommunityPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white">
      <CommunityScreen />
    </main>
  );
}
