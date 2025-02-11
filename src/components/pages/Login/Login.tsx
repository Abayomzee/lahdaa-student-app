/** @format */

import React from "react";

import { Divider, Wrapper } from "./style";

import { GoogleIcon } from "components/atom/SvgIcon";
import { TextInput } from "components/molecules/Inputs";
import IconButton from "components/atom/button/IconButton";
import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import Typography from "components/atom/Typography";
import { Flex } from "styles/layouts/Flex";
import { PrimaryButton } from "components/atom/button";

// Type defination
interface Props {}

// Component
const Login: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate
      $title="Log in to your account"
      $subTitle="Enter your detail to login"
    >
      <Wrapper>
        <IconButton className="w-full">
          <GoogleIcon />
          Log in with Google
        </IconButton>

        <Divider>
          <div className="line"></div>
          <Typography as="h6" className="h8" text="OR" />
          <div className="line"></div>
        </Divider>

        <TextInput
          $label="Email Address"
          type="email"
          placeholder="Please enter your email..."
          className="mb-20"
        />

        <TextInput
          $label="Password"
          type="password"
          placeholder="Please enter your email..."
        />

        <Flex className="mt-20 mb-20" $gap="1rem" $flexRowJcBetweenAiCenter>
          <Typography as="h6" className="p6" text="Remember me" />
          <Typography as="h6" className="l3" text="Forgot your Password?" />
        </Flex>

        <PrimaryButton className="w-full">Log in</PrimaryButton>
      </Wrapper>
    </OnboardingTemplate>
  );
};

export default Login;
