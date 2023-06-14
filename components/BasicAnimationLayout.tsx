"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

const BasicAnimationLayout = ({ children }: { children: React.ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to(root.current!.childNodes, {
      //   opacity: 1,
      //   x: 0,
      //   delay: 0.5,
      //   duration: 2,
      //   stagger: 0.2,
      //   ease: "elastic.out(2, 0.5)",
      // });

      gsap.fromTo(
        root.current!.childNodes,
        {
          opacity: 0,
          x: -10,
        },
        {
          delay: 0.5,
          duration: 2,
          opacity: 1,
          x: 0,
          stagger: 0.2,
          ease: "elastic.out(2, 0.5)",
        }
      );
      // gsap.from(root.current, { opacity: 1, duration: 0.5, autoAlpha: 0 });

      // gsap.fromTo(
      //   root.current!.childNodes,
      //   { opacity: 0, y: 5 },
      //   {
      //     duration: 0.25,
      //     y: 0,
      //     opacity: 1,
      //     stagger: 0.2,
      //     delay: 0.05,
      //     ease: "power1.out",
      //   }
      // );

      return () => ctx.revert();
    }, root);
  }, []);

  return (
    <main className={`flex gap-2 h-screen bg-main-bg p-2`} ref={root}>
      {children}
    </main>
  );
};

export default BasicAnimationLayout;
