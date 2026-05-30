export type FeatureItem = {
  icon: string;
  label: string;
  desc: string;
};

export type AboutValue = {
  icon: string;
  title: string;
  desc: string;
};

export type JoinStep = {
  n: string;
  title: string;
  desc: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export const NAV_ITEMS = ["About", "What We Do", "Join Us"] as const;

export const STATS: readonly StatItem[] = [
  { value: "100%", label: "Open Source" },
  { value: "∞", label: "Contributors welcome" },
  { value: "0", label: "Barriers to entry" },
];

export const ABOUT_VALUES: readonly AboutValue[] = [
  {
    icon: "🔓",
    title: "Open Source First",
    desc: "Everything we build is public and permissively licensed.",
  },
  {
    icon: "🤝",
    title: "No Gatekeeping",
    desc: "All skill levels are equally valued and welcomed.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    desc: "Somalis in every timezone, contributing every day.",
  },
  {
    icon: "💡",
    title: "Purpose Driven",
    desc: "We build things that matter to our community.",
  },
];

export const WHAT: readonly FeatureItem[] = [
  {
    icon: "→",
    label: "Open Source Projects",
    desc: "We build tools that solve real problems — in the open, for everyone.",
  },
  {
    icon: "→",
    label: "Collaborative Culture",
    desc: "No gatekeeping. Every skill level is welcome and every voice matters.",
  },
  {
    icon: "→",
    label: "Mentorship & Learning",
    desc: "Experienced members help newcomers grow through code reviews and pair sessions.",
  },
  {
    icon: "→",
    label: "Global Somali Network",
    desc: "Connecting technologists from Mogadishu to Minneapolis through shared purpose.",
  },
];

export const STEPS: readonly JoinStep[] = [
  {
    n: "1",
    title: "Explore our repos",
    desc: "Browse our GitHub organization and find a project that interests you.",
  },
  {
    n: "2",
    title: "Introduce yourself",
    desc: "Join our community, say hello, and tell us what you'd like to work on.",
  },
  {
    n: "3",
    title: "Start contributing",
    desc: "Open issues, submit PRs, write docs. Every contribution is valued.",
  },
];
