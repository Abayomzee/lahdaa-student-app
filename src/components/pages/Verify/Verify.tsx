/** @format */

import React from "react";

import { Wrapper } from "./style";

import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import { PrimaryButton } from "components/atom/button";
import Typography from "components/atom/Typography";
import OtpInput from "components/molecules/Inputs/OtpInput";
import { Flex } from "styles/layouts/Flex";
import { VerifyActions } from "components/molecules/VerifyActions";

// Type defination
interface Props {}

// Component
const Verify: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate
      $title="Verify your identity"
      $subTitle="We’ve sent a code to the number ending -28"
    >
      <Wrapper>
        <VerifyActions
          $title="Email code to"
          $description="maxbert22@email.com"
        />
        <VerifyActions
          $title="Text code to number in -27"
          $description="Our text are free, but some service providers may apply usage
            charges in certain cases."
        />

        <Typography
          as="h6"
          className="l3 mt-30"
          text="Sign in to a different account"
        />
      </Wrapper>
    </OnboardingTemplate>
  );
};

export default Verify;
