import Reveal from "../../components/reveal";
import { WHAT } from "../../data/home-content";

const WhatWeDoSection = () => (
  <section
    className="mx-auto max-w-[1080px] px-[18px] py-[72px] md:px-6 md:py-24"
    id="what-we-do"
  >
    <Reveal>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[1.5px] text-[#999]">
        What We Do
      </p>
      <h2 className="mb-[60px] text-[clamp(28px,9vw,38px)] font-extrabold leading-[1.1] tracking-[-1px] break-words hyphens-auto md:text-[clamp(30px,4vw,44px)] md:tracking-[-1.5px]">
        Where code meets
        <br />
        community.
      </h2>
    </Reveal>
    <div className="grid grid-cols-1 gap-4 min-[761px]:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      {WHAT.map((item, index) => (
        <Reveal key={item.label} delay={index * 70}>
          <div className="h-full rounded-2xl border border-[#ebebeb] p-7 px-6 transition-[border-color,box-shadow] hover:border-[#ccc] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <div className="mb-4 font-mono text-xl text-[#bbb]">
              {item.icon}
            </div>
            <h3 className="mb-2.5 text-base font-bold tracking-[-0.3px]">
              {item.label}
            </h3>
            <p className="text-sm leading-[1.65] text-[#888]">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
