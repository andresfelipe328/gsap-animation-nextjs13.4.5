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
          visibility: "hidden",
        },
        {
          autoAlpha: 1,
          delay: 0.5,
          duration: 2,
          opacity: 1,
          x: 0,
          stagger: 0.2,
          ease: "elastic.out(2, 0.5)",
        }
      );

      return () => ctx.revert();
    }, root);
  }, []);

  return (
    <main className={`flex min-h-screen gap-2 bg-main-bg p-2`} ref={root}>
      {children}
    </main>
  );
};

export default BasicAnimationLayout;
