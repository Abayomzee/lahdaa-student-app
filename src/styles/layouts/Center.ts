import styled from "styled-components";
import { responsive } from "../Abstract/Breakpoints";

export const Center = styled.section`
  max-width: var(--max-row-width);
  margin-inline: auto;

  /* Media Queries */
  ${responsive("lg", `padding-left: 2rem; padding-right: 2rem;`)}
`;

export const CenterSlider = styled(Center)`
  max-width: var(--max-row-width-slider);
`;

export const CenterWriteup = styled(Center)`
  max-width: var(--max-row-width-writeup);
`;

export const CenterWriteupWide = styled(Center)`
  max-width: var(--max-row-width-writeup-wide);
`;

export const CenterBlogPostWide = styled(Center)`
  max-width: var(--max-row-width-blogpost-wide);
`;

export const CenterExtended = styled(Center)`
  max-width: var(--max-row-width-extended);
`;

export const CenterFaq = styled(Center)`
  max-width: var(--max-row-width-faq);
`;

export const CenterVendorOnBd = styled(Center)`
  max-width: var(--max-row-width-vendor-onbd);
`;
