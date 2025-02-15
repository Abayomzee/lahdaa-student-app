/** @format */

import React, { AllHTMLAttributes } from "react";

import {
  Container,
  ContainerCard,
  ContainerCardWrapper,
  Wrapper,
} from "./style";

import { AuthTopNav } from "components/molecules/TopNav";
import Typography from "components/atom/Typography";
import { PageAnimation } from "../PageAnimation";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  $title?: string;
  $subTitle?: string;
  $contentSize?: string;
}

// Component
const OnboardingTemplate: React.FC<Props> = (props) => {
  // Props
  const { $title, $subTitle, $contentSize, children } = props;

  // Data to display
  return (
    <Wrapper>
      <AuthTopNav />
      <PageAnimation>
        <Container>
          {$title && (
            <Typography as="h3" className="h7 text-center" text={$title} />
          )}
          {$subTitle && (
            <Typography
              as="h3"
              className="p5 mt-5 text-center"
              text={$subTitle}
            />
          )}
          <ContainerCardWrapper className="mt-30">
            <ContainerCard $contentSize={$contentSize}>
              {children}
            </ContainerCard>
          </ContainerCardWrapper>
        </Container>
      </PageAnimation>
    </Wrapper>
  );
};

export default OnboardingTemplate;
