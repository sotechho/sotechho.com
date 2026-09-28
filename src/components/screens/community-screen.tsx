import Link from 'next/link';
import Reveal from '../reveal';

export const CommunityScreen = () => (
  <section
    aria-labelledby="community-heading"
    className="mx-auto max-w-[1080px] px-[18px] py-[72px] text-center md:px-6 md:py-24"
  >
    <Reveal>
      <h1
        id="community-heading"
        className="mb-5 text-[clamp(32px,11vw,48px)] font-black leading-[1.05] tracking-[-1.2px] break-words hyphens-auto md:text-[clamp(32px,5vw,60px)] md:tracking-[-2px]"
      >
        Everyone is welcome.
        <br />
        <span className="text-[#595959]">No exceptions.</span>
      </h1>
      <p className="mx-auto mb-9 max-w-full text-[17px] leading-[1.65] text-[#595959] break-words hyphens-auto md:max-w-[440px]">
        Whether you code, design, write, or just have ideas — the Somali tech
        movement has room for you.
      </p>
      <div className="flex flex-col items-stretch justify-center gap-3 min-[761px]:flex-row min-[761px]:flex-wrap">
        <Link
          href="https://github.com/sotechho"
          target="_blank"
          rel="noreferrer"
          aria-label="Join SoTechHo on GitHub (opens in a new tab)"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-7 py-[13px] text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-85"
        >
          Join SoTechHo →
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#ddd] px-7 py-[13px] text-[15px] font-semibold text-[#333] no-underline transition-colors hover:border-[#111] hover:text-[#111]"
        >
          Learn more
        </Link>
      </div>
    </Reveal>
  </section>
);
