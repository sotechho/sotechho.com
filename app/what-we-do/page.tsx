import { WhatWeDoScreen } from '@/src/components/screens';
import { createPageMetadata, PAGE_SEO } from '@/src/lib/seo';

export const metadata = createPageMetadata(PAGE_SEO.whatWeDo);

export default function WhatWeDoPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white">
      <WhatWeDoScreen />
    </main>
  );
}
