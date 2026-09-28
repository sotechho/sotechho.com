import Reveal from '../reveal';
import { ABOUT_VALUES } from '../../lib/data/contents';

export const AboutScreen = () => (
  <section
    aria-labelledby="about-heading"
    className="mx-auto max-w-[1080px] px-[18px] py-[72px] md:px-6 md:py-24"
  >
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[1.5px] text-[#595959]">
          About
        </p>
        <h1
          id="about-heading"
          className="mb-6 text-[clamp(28px,9vw,38px)] font-extrabold leading-[1.1] tracking-[-1px] break-words hyphens-auto md:text-[clamp(30px,4vw,44px)] md:tracking-[-1.5px]"
        >
          Built by Somalis.
          <br />
          For the world.
        </h1>
        <p className="mb-4 text-base leading-[1.75] text-[#666]">
          SoTechHo is an open-source organization founded to cultivate a
          thriving technology ecosystem rooted in Somali identity and global
          ambition.
        </p>
        <p className="text-base leading-[1.75] text-[#666]">
          We believe great software is built by diverse, passionate communities.
          Whether you're a seasoned engineer or writing your first line of code
          — there's a place for you here.
        </p>
      </Reveal>
      <Reveal delay={100}>
        <div className="grid grid-cols-1 gap-3 min-[761px]:grid-cols-2">
          {ABOUT_VALUES.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-[14px] border border-[#ebebeb] bg-[#fafafa] p-5"
            >
              <div aria-hidden="true" className="mb-2.5 text-xl">
                {icon}
              </div>
              <h2 className="mb-1.5 text-sm font-bold">{title}</h2>
              <p className="text-[13px] leading-[1.6] text-[#595959]">{desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
