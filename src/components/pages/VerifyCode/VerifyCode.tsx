/** @format */

import React from "react";

import { Wrapper } from "./style";

import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import { PrimaryButton } from "components/atom/button";
import Typography from "components/atom/Typography";
import OtpInput from "components/molecules/Inputs/OtpInput";
import { Flex } from "styles/layouts/Flex";

// Type defination
interface Props {}

// Component
const VerifyCode: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate
      $title="Forgot Password"
      $subTitle="Recover Password with Email"
    >
      <Wrapper>
        <Flex $flexRowJcCenterAiCenter>

        <OtpInput />
        </Flex>

        <PrimaryButton className="w-full mt-40">Submit Code</PrimaryButton>

        <Typography
          as="h6"
          className="p6 text-center mt-30"
          text="Experiencing issues receiving the code?"
        />
        <Typography as="h6" className="l3 text-center mt-10" text="Resend code" />
      </Wrapper>
    </OnboardingTemplate>
  );
};

export default VerifyCode;
