'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS } from '../lib/data/contents';
import SiteBrand from './site-brand';

const navLinkClass =
  'cursor-pointer border-0 bg-transparent text-sm font-medium text-[#666] transition-colors hover:text-[#111]';
const darkButtonClass =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111] px-5 py-2 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-85';
const ghostButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#666] no-underline transition-colors hover:border-[#111] hover:text-[#111]';

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav
        aria-label="Primary"
        className={`border-b px-4 transition-all duration-300 md:px-6 ${
          scrolled || menuOpen
            ? 'border-[#f0f0f0] bg-white/95 backdrop-blur-xl'
            : 'border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex h-[58px] max-w-[1080px] items-center justify-between md:h-[60px]">
          <Link href="/" aria-label="SoTechHo home" className="inline-flex">
            <SiteBrand />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={navLinkClass}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-2.5 md:flex">
            <Link
              href="https://github.com/sotechho"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className={ghostButtonClass}
            >
              GitHub
            </Link>
            <Link href="/" className={darkButtonClass}>
              Visit Site
            </Link>
          </div>
          <button
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border border-[#e5e5e5] bg-white text-[#111] transition-colors hover:border-[#111] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span
              className={`h-0.5 w-4 rounded-full bg-[#111] transition-transform ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-[#111] transition-opacity ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-[#111] transition-transform ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
        <div
          className={`mx-auto max-w-[1080px] flex-col gap-2 border-t border-[#f0f0f0] py-4 md:hidden ${
            menuOpen ? 'flex' : 'hidden'
          }`}
          id="mobile-navigation"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${navLinkClass} w-full rounded-xl px-1 py-3 text-left text-[15px] text-[#333]`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <div className="grid grid-cols-1 gap-2.5 pt-2 min-[421px]:grid-cols-2">
            <Link
              href="https://github.com/sotechho"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className={`${ghostButtonClass} px-4 py-3`}
            >
              GitHub
            </Link>
            <Link href="/" className={`${darkButtonClass} px-4 py-3`}>
              Visit Site
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
