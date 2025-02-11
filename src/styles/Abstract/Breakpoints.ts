import { css } from "styled-components";

// const sizesREM = {
//   /**
//    * Default desktop unit size === 16px
//    * i.e 62.5% of 16px === 10px === 1rem
//    *
//    * i.e 2rem === 20px
//    * i.e 10rem === 100px etc.
//    */
//   xlg: "180rem", // 1800px --> Big desktop
//   lg: "125rem", // 1250px --> Tablet landscape
//   md: "10.65rem", // 1065px --> Tablet landscape medium size
//   xmd: "10.45rem", // 1045px --> Tablet landscape small size
//   sm: "90rem", // 900px --> Tablet portrait
//   xsm: "60rem", // 600px --> Phone
//   xxsm: "46rem", // 460px --> Small Phone
// };

const sizesEM = {
  /**
   * EM is relative to the desktop initial or default
   * value which is 16px.
   *
   * 1em = 16px
   * i.e 112.5em x 16px === 1800px
   */

  xlg: "112.5em", // 1800px --> Big desktop
  lg: "78.125em", // 1250px --> Tablet landscape
  md: "66.6em", // 1065px --> Tablet landscape medium size
  xmd: "65.31em", // 1045px --> Tablet landscape small size
  sm: "56.25em", // 900px --> Tablet portrait
  msm: "43.75em", // 700px --> Small Tablet portrait
  xsm: "37.5em", // 600px --> Phone
  xxsm: "28.75em", // 460px --> Small Phone
};

type breakpoint = "xlg" | "lg" | "md" | "xmd" | "sm" | "msm" | "xsm" | "xxsm";
export const responsive = (breakpoint: breakpoint, content: any) => {
  // Small Phone
  if (breakpoint === "xxsm") {
    return css`
      @media only screen and (max-width: ${sizesEM.xxsm}) {
        ${content}
      }
    `;
  }
  //   Phone
  if (breakpoint === "xsm") {
    return css`
      @media only screen and (max-width: ${sizesEM.xsm}) {
        ${content}
      }
    `;
  }
  //   Small Tablet portrait
  if (breakpoint === "msm") {
    return css`
      @media only screen and (max-width: ${sizesEM.sm}) {
        ${content}
      }
    `;
  }
  //   Tablet portrait
  if (breakpoint === "sm") {
    return css`
      @media only screen and (max-width: ${sizesEM.sm}) {
        ${content}
      }
    `;
  }
  //   Tablet landscape small size
  if (breakpoint === "xmd") {
    return css`
      @media only screen and (max-width: ${sizesEM.xmd}) {
        ${content}
      }
    `;
  }
  //  Tablet landscape medium size
  if (breakpoint === "md") {
    return css`
      @media only screen and (max-width: ${sizesEM.md}) {
        ${content}
      }
    `;
  }
  //   Tablet landscape
  if (breakpoint === "lg") {
    return css`
      @media only screen and (max-width: ${sizesEM.lg}) {
        ${content}
      }
    `;
  }
  //   Big desktop
  if (breakpoint === "xlg") {
    return css`
      @media only screen and (max-width: ${sizesEM.xlg}) {
        ${content}
      }
    `;
  }
};
