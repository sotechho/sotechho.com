import Link from 'next/link';
import GithubIcon from '../github-icon';
import Reveal from '../reveal';
import { STEPS } from '../../lib/data/contents';

export const JoinScreen = () => (
  <section
    aria-labelledby="join-heading"
    className="mx-auto max-w-[1080px] px-[18px] py-[72px] md:px-6 md:py-24"
  >
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[1.5px] text-[#595959]">
          How to Join
        </p>
        <h1
          id="join-heading"
          className="mb-5 text-[clamp(28px,9vw,38px)] font-extrabold leading-[1.1] tracking-[-1px] break-words hyphens-auto md:text-[clamp(30px,4vw,44px)] md:tracking-[-1.5px]"
        >
          Three steps.
          <br />
          Zero barriers.
        </h1>
        <p className="mb-9 text-[15px] leading-[1.75] text-[#595959]">
          No application, no waitlist, no gatekeepers. Show up, introduce
          yourself, and start building. It's that simple.
        </p>
        <div className="flex flex-col items-stretch gap-3 min-[761px]:flex-row min-[761px]:flex-wrap">
          <Link
            href="https://github.com/sotechho"
            target="_blank"
            rel="noreferrer"
            aria-label="Start on GitHub (opens in a new tab)"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-7 py-[13px] text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-85"
          >
            <GithubIcon size={17} />
            Start on GitHub
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#ddd] px-7 py-[13px] text-[15px] font-semibold text-[#333] no-underline transition-colors hover:border-[#111] hover:text-[#111]"
          >
            Visit sotechho.com
          </Link>
        </div>
      </Reveal>
      <ol className="flex list-none flex-col gap-0 p-0">
        {STEPS.map((step, index) => (
          <li key={step.n}>
            <Reveal delay={index * 90}>
              <div
                className={`flex gap-3.5 py-7 min-[761px]:gap-5 ${
                  index < STEPS.length - 1 ? 'border-b border-[#f0f0f0]' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] text-[13px] font-bold text-[#595959]"
                >
                  {step.n}
                </span>
                <div>
                  <h2 className="mb-1.5 text-base font-bold tracking-[-0.3px]">
                    {step.title}
                  </h2>
                  <p className="text-sm leading-[1.65] text-[#595959]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
