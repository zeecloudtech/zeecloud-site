'use client';
import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '' }: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = 'opacity .6s ease, transform .6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
