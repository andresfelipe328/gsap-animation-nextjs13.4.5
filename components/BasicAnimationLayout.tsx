"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

const BasicAnimationLayout = ({ children }: { children: React.ReactNode }) => {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    document.body.classList.remove("noJS");
    let ctx = gsap.context(() => {
      gsap.to(root.current, {
        duration: 1,
        x: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.4,
        ease: "elastic.out(1, 0.75)",
      });

      // gsap.fromTo(
      //   root.current!.childNodes,
      //   {
      //     opacity: 0,
      //     x: -10,
      //   },
      //   {
      //     delay: 0.5,
      //     duration: 2,
      //     opacity: 1,
      //     x: 0,
      //     stagger: 0.2,
      //     ease: "elastic.out(2, 0.5)",
      //   }
      // );

      return () => ctx.revert();
    }, root);
  }, []);

  return (
    <main
      className={`flex gap-2 h-screen bg-main-bg p-2 -translate-x-5 overflow-hidden root`}
      ref={root}
      style={{ opacity: 0 }}
    >
      {children}
    </main>
  );
};

export default BasicAnimationLayout;
