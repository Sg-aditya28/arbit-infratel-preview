'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 1600,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const startCounting = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(easeOut * end);

        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    // Fallback: trigger immediately if already inside viewport on mount
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startCounting();
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className={`tabular-nums inline-block ${className}`} suppressHydrationWarning>
      {prefix}{count}{suffix}
    </span>
  );
};

