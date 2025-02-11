/** @format */

import React from "react";

import { Wrapper } from "./style";

import { TextInput } from "components/molecules/Inputs";
import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import { PrimaryButton } from "components/atom/button";

// Type defination
interface Props {}

// Component
const ForgetPassword: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate
      $title="Forgot Password"
      $subTitle="Recover Password with Email"
    >
      <Wrapper>
        <TextInput
          $label="Email Address"
          type="email"
          placeholder="Please enter your email..."
          className="mb-20"
        />

        <PrimaryButton className="w-full">Reset Password</PrimaryButton>
      </Wrapper>
    </OnboardingTemplate>
  );
};

export default ForgetPassword;
