/** @format */

import React from "react";

import { Wrapper } from "./style";

import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import Typography from "components/atom/Typography";
import { VerifyActions } from "components/molecules/VerifyActions";
import { useAuthStore } from "store";

// Type defination
interface Props {}

// Component
const Verify: React.FC<Props> = () => {
  // Store
  const { registeringUserEmail } = useAuthStore();

  // Data to display
  return (
    <OnboardingTemplate
      $title="Verify your identity"
      $subTitle="We’ve sent a code to the number ending -28"
      $contentSize="46.5rem"
    >
      <Wrapper>
        <VerifyActions
          $title="Email code to"
          $description={registeringUserEmail || "--"}
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
