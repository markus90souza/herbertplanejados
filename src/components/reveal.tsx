'use client';

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

const Reveal = ({ children, className = "" }: RevealProps) => {
  const [isVisible, domRef] = useScrollReveal();
  return (
    <div
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
    >
      {children}
    </div>
  );
};

export { Reveal };