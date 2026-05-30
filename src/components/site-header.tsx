import { useState } from "react";
import { NAV_ITEMS } from "../data/home-content";
import SiteBrand from "./site-brand";

type SiteHeaderProps = {
  scrolled: boolean;
  onNavigate: (id: string) => void;
};

const getSectionId = (label: string) => label.toLowerCase().replace(/ /g, "-");

const navLinkClass =
  "cursor-pointer border-0 bg-transparent text-sm font-medium text-[#666] transition-colors hover:text-[#111]";
const darkButtonClass =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111] px-5 py-2 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-85";
const ghostButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#666] no-underline transition-colors hover:border-[#111] hover:text-[#111]";

const SiteHeader = ({ scrolled, onNavigate }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] border-b px-4 transition-all duration-300 md:px-6 ${
        scrolled || menuOpen
          ? "border-[#f0f0f0] bg-white/95 backdrop-blur-xl"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-[58px] max-w-[1080px] items-center justify-between md:h-[60px]">
        <SiteBrand />
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((label) => (
            <button
              key={label}
              className={navLinkClass}
              onClick={() => navigate(getSectionId(label))}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href="https://github.com/sotechho"
            target="_blank"
            rel="noreferrer"
            className={ghostButtonClass}
          >
            GitHub
          </a>
          <a
            href="https://sotechho.com"
            target="_blank"
            rel="noreferrer"
            className={darkButtonClass}
          >
            Visit Site
          </a>
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border border-[#e5e5e5] bg-white text-[#111] transition-colors hover:border-[#111] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span
            className={`h-0.5 w-4 rounded-full bg-[#111] transition-transform ${
              menuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-[#111] transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-4 rounded-full bg-[#111] transition-transform ${
              menuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`mx-auto max-w-[1080px] flex-col gap-2 border-t border-[#f0f0f0] py-4 md:hidden ${
          menuOpen ? "flex" : "hidden"
        }`}
        id="mobile-navigation"
      >
        {NAV_ITEMS.map((label) => (
          <button
            key={label}
            className={`${navLinkClass} w-full rounded-xl px-1 py-3 text-left text-[15px] text-[#333]`}
            onClick={() => navigate(getSectionId(label))}
            type="button"
          >
            {label}
          </button>
        ))}
        <div className="grid grid-cols-1 gap-2.5 pt-2 min-[421px]:grid-cols-2">
          <a
            href="https://github.com/sotechho"
            target="_blank"
            rel="noreferrer"
            className={`${ghostButtonClass} px-4 py-3`}
          >
            GitHub
          </a>
          <a
            href="https://sotechho.com"
            target="_blank"
            rel="noreferrer"
            className={`${darkButtonClass} px-4 py-3`}
          >
            Visit Site
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
