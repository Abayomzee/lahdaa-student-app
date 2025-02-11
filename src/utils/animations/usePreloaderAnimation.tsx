import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import cssRule from "gsap/CSSRulePlugin";

gsap.registerPlugin(scrollTrigger, cssRule);

const usePreloaderAnimation = () => {
  // Refs
  let tl = useRef();

  // Selectors
  const paths = ".logo-text";

  // Effects
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});

    return () => ctx.revert();
  }, []);

  return null;
};
export default usePreloaderAnimation;
