import { useEffect, useRef, useState, type ReactNode } from "react";

const useInView = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVis(true);
      },
      { threshold },
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, vis };
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const delayClasses: Record<number, string> = {
  0: "delay-0",
  70: "delay-[70ms]",
  90: "delay-[90ms]",
  100: "delay-100",
  140: "delay-[140ms]",
  180: "delay-[180ms]",
  210: "delay-[210ms]",
};

const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const { ref, vis } = useInView();
  const delayClass = delayClasses[delay] ?? "delay-0";

  return (
    <div
      ref={ref}
      className={`${className} ${delayClass} transition-[opacity,transform] duration-[650ms] ease-out ${
        vis ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Reveal;
