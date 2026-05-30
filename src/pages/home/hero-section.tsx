import GithubIcon from "../../components/github-icon";
import { STATS } from "../../data/home-content";

type HeroSectionProps = {
  onJoin: () => void;
};

const HeroSection = ({ onJoin }: HeroSectionProps) => (
  <section className="mx-auto max-w-[1080px] px-[18px] pb-[72px] pt-[118px] text-center md:px-6 md:pb-[100px] md:pt-[140px]">
    <div>
      <span className="inline-flex max-w-full items-center gap-1.5 whitespace-normal rounded-full border border-[#e5e5e5] px-3.5 py-1.5 text-xs font-medium text-[#555] min-[421px]:text-[13px]">
        <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#22c55e]" />
        Open Source · Open to Everyone
      </span>
    </div>

    <h1 className="mb-6 mt-7 text-[clamp(38px,14vw,58px)] font-black leading-[1.02] tracking-[-1.8px] break-words hyphens-auto md:text-[clamp(44px,8vw,88px)] md:tracking-[-3px]">
      Somali Technology
      <br />
      <span className="text-[#aaa]">Handson.</span>
    </h1>

    <p className="mx-auto mb-10 max-w-full text-[clamp(17px,2vw,20px)] font-normal leading-[1.65] text-[#666] break-words hyphens-auto md:max-w-[520px]">
      A community-driven open-source organization for Somali technologists
      worldwide. Build real things, learn together, and leave your mark on the
      global tech landscape.
    </p>

    <div className="flex flex-col items-stretch justify-center gap-3 min-[761px]:flex-row min-[761px]:flex-wrap">
      <button
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111] px-7 py-[13px] text-[15px] font-semibold text-white transition-opacity hover:opacity-85 min-[761px]:w-auto"
        onClick={onJoin}
        type="button"
      >
        Join the community
        <span className="text-lg">→</span>
      </button>
      <a
        href="https://github.com/sotechho"
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] border-[#ddd] px-7 py-[13px] text-[15px] font-semibold text-[#333] no-underline transition-colors hover:border-[#111] hover:text-[#111] min-[761px]:w-auto"
      >
        <GithubIcon />
        View on GitHub
      </a>
    </div>

    <div className="mt-12 grid grid-cols-1 justify-center gap-5 min-[421px]:grid-cols-3 min-[761px]:mt-[72px] min-[761px]:flex min-[761px]:flex-wrap min-[761px]:gap-12">
      {STATS.map(({ value, label }) => (
        <div key={label} className="min-w-0 text-center">
          <div className="text-[28px] font-extrabold tracking-[-1px]">
            {value}
          </div>
          <div className="mt-1 text-[13px] font-medium text-[#999]">
            {label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
