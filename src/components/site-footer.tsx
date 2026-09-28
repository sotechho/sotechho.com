import Link from 'next/link';
import GithubIcon from './github-icon';
import SiteBrand from './site-brand';

const SiteFooter = () => (
  <footer className="border-t border-[#f0f0f0] px-6 py-8">
    <div className="mx-auto flex max-w-[1080px] flex-col flex-wrap items-start justify-between gap-4 lg:flex-row lg:items-center">
      <div className="flex flex-col items-start gap-2 min-[761px]:flex-row min-[761px]:items-center">
        <SiteBrand compact />
        <span className="text-[13px] text-[#595959]">
          · Somali Technology Handson
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-4 min-[761px]:gap-6">
        <Link
          href="/"
          className="text-[13px] font-medium text-[#595959] no-underline transition-colors hover:text-[#111]"
        >
          sotechho.com
        </Link>
        <Link
          href="https://github.com/sotechho"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub (opens in a new tab)"
          className="flex items-center gap-1.5 text-[13px] font-medium text-[#595959] no-underline transition-colors hover:text-[#111]"
        >
          <GithubIcon size={14} />
          GitHub
        </Link>
      </div>
      <p className="text-xs text-[#595959]">
        © {new Date().getFullYear()} SoTechHo. Open Source with ♥
      </p>
    </div>
  </footer>
);

export default SiteFooter;
