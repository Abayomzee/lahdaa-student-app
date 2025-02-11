import { css } from "styled-components";

export const Reset = css`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    scroll-behavior: smooth;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    background: var(--color-primary);
    width: 0.6rem;
    height: 0.8rem;
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-2);
    border-radius: 1rem;
    display: none;
  }

  html {
    font-size: 62.5%;

    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }
  }

  body {
    box-sizing: border-box;
    // background-color: var(--color-bg);
  }
`;
