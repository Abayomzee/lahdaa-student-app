import { css } from "styled-components";

export const Variables = css`
  :root {
    /* Color variables */
    --color-white: #ffffff;
    --color-black: #000000;

    /* Other colors */
    --color-1: #0a0222;
    --color-2: #bdbdbd;
    --color-3: #1d1d20;
    --color-4: #272d33;
    --color-5: #647382;
    --color-6: #ebeaed;
    --color-7: #9e9e9e;
    --color-8: #2e2c34;
    --color-9: #84818a;

    /* Shadows */
    --shadow-1: 0 1rem 1.8rem 0.2rem rgba(0, 0, 0, 0.08);
    --shadow-2: 0px 2px 4px 0px rgba(48, 49, 51, 0.1),
      0px 0px 1px 0px rgba(48, 49, 51, 0.05);
    --shadow-3: 0.6rem 0.6rem 5.4rem 0 rgba(0, 0, 0, 0.05);
    --shadow-4: 0 0.5rem 2rem 0.1rem rgba(0, 0, 0, 0.06);
    --shadow-5: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-6: 0px 16px 24px 0px rgba(48, 49, 51, 0.1),
      0px 0px 1px 0px rgba(48, 49, 51, 0.05);

    /* Gradients */
    --gradient-1: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    --gradient-2: linear-gradient(
      82deg,
      #fa3f4c -2.11%,
      rgba(86, 19, 90, 0.75) 43.37%,
      rgba(84, 167, 243, 0.88) 96.22%
    );
    --gradient-3: linear-gradient(
      rgba(23, 23, 23, 0.32),
      rgba(23, 23, 23, 0.32)
    );
    --gradient-4: linear-gradient(
      82deg,
      #fa3f4c -2.11%,
      rgba(86, 19, 90, 0.4) 43.37%,
      rgba(84, 167, 243, 0.53) 96.22%
    );

    /* Layout variables */
    --max-row-width: 133rem;
    --max-row-width-slider: 122rem;
    --max-row-width-writeup: 98rem;
    --max-row-width-writeup-wide: 110rem;
    --max-row-width-blogpost-wide: 80rem;
    --max-row-width-faq: 80rem;
    --max-row-width-extended: 155rem;
    --max-row-width-dashboard: 114rem;
    --max-row-width-vendor-onbd: 90rem;
    --center-extended-side-padding: 11remm;
  }
`;
