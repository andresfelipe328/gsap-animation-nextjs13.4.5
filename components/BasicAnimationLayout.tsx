"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

const BasicAnimationLayout = ({ children }: { children: React.ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(root.current!.childNodes, {
      //   opacity: 0,
      //   x: -10,
      //   stagger: 0.2,
      //   ease: "elastic.out(1, 0.75)",
      // });
      gsap.fromTo(
        root.current!.childNodes,
        {
          opacity: 0,
          x: -10,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          ease: "elastic.out(1, 0.75)",
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