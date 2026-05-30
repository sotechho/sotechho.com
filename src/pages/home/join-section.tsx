import GithubIcon from "../../components/github-icon";
import Reveal from "../../components/reveal";
import { STEPS } from "../../data/home-content";

const JoinSection = () => (
  <section
    className="mx-auto max-w-[1080px] px-[18px] py-[72px] md:px-6 md:py-24"
    id="join-us"
  >
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[1.5px] text-[#999]">
          How to Join
        </p>
        <h2 className="mb-5 text-[clamp(28px,9vw,38px)] font-extrabold leading-[1.1] tracking-[-1px] break-words hyphens-auto md:text-[clamp(30px,4vw,44px)] md:tracking-[-1.5px]">
          Three steps.
          <br />
          Zero barriers.
        </h2>
        <p className="mb-9 text-[15px] leading-[1.75] text-[#888]">
          No application, no waitlist, no gatekeepers. Show up, introduce
          yourself, and start building. It's that simple.
        </p>
        <div className="flex flex-col items-stretch gap-3 min-[761px]:flex-row min-[761px]:flex-wrap">
          <a
            href="https://github.com/sotechho"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-7 py-[13px] text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-85"
          >
            <GithubIcon size={17} />
            Start on GitHub
          </a>
          <a
            href="https://sotechho.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#ddd] px-7 py-[13px] text-[15px] font-semibold text-[#333] no-underline transition-colors hover:border-[#111] hover:text-[#111]"
          >
            Visit sotechho.com
          </a>
        </div>
      </Reveal>
      <div className="flex flex-col gap-0">
        {STEPS.map((step, index) => (
          <Reveal key={step.n} delay={index * 90}>
            <div
              className={`flex gap-3.5 py-7 min-[761px]:gap-5 ${
                index < STEPS.length - 1 ? "border-b border-[#f0f0f0]" : ""
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] text-[13px] font-bold text-[#bbb]">
                {step.n}
              </div>
              <div>
                <div className="mb-1.5 text-base font-bold tracking-[-0.3px]">
                  {step.title}
                </div>
                <div className="text-sm leading-[1.65] text-[#888]">
                  {step.desc}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default JoinSection;
