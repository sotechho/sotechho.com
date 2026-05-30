import Reveal from "../../components/reveal";

const CtaSection = () => (
  <section className="mx-auto max-w-[1080px] px-[18px] py-[72px] text-center md:px-6 md:py-24">
    <Reveal>
      <h2 className="mb-5 text-[clamp(32px,11vw,48px)] font-black leading-[1.05] tracking-[-1.2px] break-words hyphens-auto md:text-[clamp(32px,5vw,60px)] md:tracking-[-2px]">
        Everyone is welcome.
        <br />
        <span className="text-[#ccc]">No exceptions.</span>
      </h2>
      <p className="mx-auto mb-9 max-w-full text-[17px] leading-[1.65] text-[#888] break-words hyphens-auto md:max-w-[440px]">
        Whether you code, design, write, or just have ideas — the Somali tech
        movement has room for you.
      </p>
      <div className="flex flex-col items-stretch justify-center gap-3 min-[761px]:flex-row min-[761px]:flex-wrap">
        <a
          href="https://github.com/sotechho"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-7 py-[13px] text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-85"
        >
          Join SoTechHo →
        </a>
        <a
          href="https://sotechho.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#ddd] px-7 py-[13px] text-[15px] font-semibold text-[#333] no-underline transition-colors hover:border-[#111] hover:text-[#111]"
        >
          Learn more
        </a>
      </div>
    </Reveal>
  </section>
);

export default CtaSection;
