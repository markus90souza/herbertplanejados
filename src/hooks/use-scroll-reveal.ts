/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: <explanation> */
import { useState, useRef, useEffect } from "react";

type UseScrollRevealReturn = [boolean, React.RefObject<HTMLDivElement | null>];
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null >(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return [isVisible, domRef];
};

export { useScrollReveal };
