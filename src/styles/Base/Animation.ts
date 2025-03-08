import { keyframes } from "styled-components";

// Keyframes
export const rotateAnimation = keyframes`
0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Zoom = keyframes`
0% {
    transform: scale(1);
  }

50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

// Framer animations
export const animate_slideUp = {
  variants: {
    hidden: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.7 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        // delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  },
  transition: {
    ease: "easeOut",
    duration: 0.6,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const animateFadeOut = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { ease: "linear", duration: 0.4, delay: 0.002 },
};

export const animateFadeInUp = {
  variants: {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  },
  transition: { ease: "linear", duration: 0.4 },
};

export const animateSlideInRight = {
  variants: {
    hidden: { x: "100%" },
    visible: { x: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
};

export const animateSlideInTop = {
  variants: {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
};

export const animateFade = {
  variants: {
    hidden: {
      opacity: 0,
      y: 5,
      transition: { duration: 0.4 },
    },
    visible: { opacity: 1, y: 0 },
    // exit: { opacity: 0, y: -5 },
  },
  transition: { ease: "easeIn", duration: 0.5 },
};

export const animateFadeSmall = {
  variants: {
    hidden: {
      opacity: 0,

      transition: { duration: 0.4 },
    },
    visible: { opacity: 1 },
    // exit: { opacity: 0, y: -5 },
  },
  transition: { ease: "easeIn", duration: 0.45 },
};

export const animateSlideInBottomFade = {
  variants: {
    hidden: { y: 5, opacity: 0.4 },
    visible: { y: 0, opacity: 1 },
  },
  transition: { ease: "easeInOut", duration: 0.4, delay: 0.04 },
};
