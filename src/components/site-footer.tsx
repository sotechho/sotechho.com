import GithubIcon from "./github-icon";
import SiteBrand from "./site-brand";

const SiteFooter = () => (
  <footer className="border-t border-[#f0f0f0] px-6 py-8">
    <div className="mx-auto flex max-w-[1080px] flex-col flex-wrap items-start justify-between gap-4 lg:flex-row lg:items-center">
      <div className="flex flex-col items-start gap-2 min-[761px]:flex-row min-[761px]:items-center">
        <SiteBrand compact />
        <span className="text-[13px] text-[#bbb]">
          · Somali Technology Handson
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-4 min-[761px]:gap-6">
        <a
          href="https://sotechho.com"
          target="_blank"
          rel="noreferrer"
          className="text-[13px] font-medium text-[#999] no-underline transition-colors hover:text-[#111]"
        >
          sotechho.com
        </a>
        <a
          href="https://github.com/sotechho"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-[13px] font-medium text-[#999] no-underline transition-colors hover:text-[#111]"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
      </div>
      <p className="text-xs text-[#ccc]">
        © {new Date().getFullYear()} SoTechHo. Open Source with ♥
      </p>
    </div>
  </footer>
);

export default SiteFooter;
