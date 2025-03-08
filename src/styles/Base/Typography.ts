/** @format */

import { css } from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Typography = css`
  body {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .h {
    &1 {
      font-weight: 500;
      font-size: 1.7rem;
      line-height: 135%;
      color: var(--color-4);
    }

    &2 {
      font-family: "DM Sans";
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.83rem;
      color: var(--color-8);
    }
    &3 {
      font-family: "DM Sans";
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 24px;
      color: #0a0222;
    }
    &4 {
      font-family: "DM Sans";
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.963rem;
      color: rgba(0, 0, 0, 0.7);
    }
    &5 {
      font-family: Inter;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.7rem;
      color: #4d4d4d;

      span {
        font-family: Inter;
        font-size: 1.133rem;
        font-weight: 300;
        line-height: 3.2rem;
        color: #222222;
      }
    }
    &6 {
      font-family: Inter;
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.637rem;
      color: #222222;
    }
    &7 {
      font-family: Inter;
      font-size: 32px;
      font-weight: 400;
      line-height: 135%;
      color: #0a0222;
    }
    &8 {
      font-family: "DM Sans";
      font-size: 1.2rem;
      font-weight: 400;
      color: #6b7b8a;
    }
    &9 {
      font-family: "Noto Serif Hentaigana", serif;
      font-size: 4rem;
      font-weight: 400;
      line-height: 135%;
      color: #0a0222;
    }
    &10 {
      font-family: "DM Sans";
      font-size: 2.7rem;
      font-weight: 400;
      line-height: 135%;
      color: #040035;
    }
    &11 {
      font-family: "DM Sans";
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 135%;
      color: #0a0222;
    }
    &12 {
      font-family: "DM Sans";
      font-weight: 400;
      font-size: 1.3rem;
      color: #1d1d20;
    }
    &13 {
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 3.2rem;
      color: #5c4fff;
      vertical-align: middle;

      span {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 1.4rem;
        color: #9890ff;
      }
    }
    &14 {
      font-family: Inter;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 3.2rem;
      color: #1d1d20;
    }
    &15 {
      font-family: "DM Sans";
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 135%;
      color: #141414;
      text-transform: uppercase;
    }
    &16 {
      font-family: "DM Sans";
      font-weight: 700;
      font-size: 0.7rem;
      text-align: center;
    }
    &17 {
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 1.6rem;
      color: #4a4a4c;
    }
    &18 {
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 130%;
      color: #0a0222;
    }
    &19 {
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.8rem;
      letter-spacing: 0%;
      color: #0a0222;
    }
    &20 {
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      color: #0a0222;
    }
    &21 {
      font-family: Inter;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 135%;
      color: #676e76;
    }
  }

  /* Paragraphs */
  .p {
    &1 {
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 130%;
      color: var(--color-5);
    }
    &2 {
      font-family: "DM Sans";
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      color: var(--color-9);
    }
    &3 {
      font-family: "DM Sans";
      font-size: 1.3rem;
      font-weight: 300;
      color: #0a0222;
    }
    &4 {
      font-family: "DM Sans";
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.963rem;
    }
    &5 {
      font-family: Inter;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 135%;
      color: #0a0222;
    }
    &6 {
      font-family: "DM Sans";
      font-size: 1.4rem;
      font-weight: 400;
      color: #1d1d20;
    }
    &7 {
      font-family: "DM Sans";
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.8rem;
      color: #6b7b8a;
    }
    &8 {
      font-family: "DM Sans";
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 130%;
      color: #1d1d20cc;
    }
    &9 {
      font-family: DM Sans;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #1d1d20;
    }
  }
  /* Link */
  .l {
    text-decoration: none;
    cursor: pointer;

    &1 {
      font-family: "DM Sans";
      font-size: 1.3rem;
      font-weight: 300;
      color: #040010;
    }
    &2 {
      font-family: "DM Sans";
      font-size: 1.3rem;
      font-weight: 300;
      color: #5c4fff;
    }
    &3 {
      font-family: DM Sans;
      font-size: 1.4rem;
      font-weight: 500;
      color: #5c4fff;
    }
    &4 {
      font-family: "DM Sans";
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.8rem;
      color: #5c4fff;
    }
    &5 {
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 1.3rem;
      color: #0a0222;
      text-transform: uppercase;

      ${FlexRowAiCenter}
      gap: .5rem;
    }
  }

  /* Button texts */
  .b {
    &-1 {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-secondar);
    }
  }
`;
