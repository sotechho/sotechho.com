import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
  return (
    <div
      className={`${className} motion-safe:animate-[reveal-in_650ms_ease-out_both]`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
