/** @format */

import React, { useState } from "react";
import * as yup from "yup";

import { Divider, Wrapper } from "./style";

import { GoogleIcon, SpinnerIcon } from "components/atom/SvgIcon";
import { TextInput } from "components/molecules/Inputs";
import IconButton from "components/atom/button/IconButton";
import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import Typography from "components/atom/Typography";
import { Flex } from "styles/layouts/Flex";
import { PrimaryButton } from "components/atom/button";
import { useAuthStore } from "store";
import useFormValidation from "utils/hooks/useFormValidation";
import { useApi, useToast } from "utils/hooks";
import endpoints from "services/endpoints";
import { useNavigate } from "react-router";
import { appRoutes } from "utils/constants";
import httpService from "services/httpService";

// Type defination
interface Props {}

// Component
const Login: React.FC<Props> = () => {
  // State
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Store
  const { userLogIn, setRegisteringUserEmail } = useAuthStore();

  // Hooks
  const { validateForm } = useFormValidation();
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  // Api
  const loginApi = useApi<any>();

  // Methods
  const handleFormChanges = (name: string, value: any) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = { ...formValues };
    const validate = await validateForm(formSchema, payload);
    if (!validate) return;

    const res = await loginApi.sendRequest("POST", endpoints.loginUrl, payload);

    if (res?.name === "AxiosError") {
      const { message } = res?.response?.data;
      errorToast(message);
      return;
    }

    if (res?.message === "Login Successful") {
      successToast("User logged in successfully");
      setRegisteringUserEmail("");
      httpService.setToken(res?.token);
      userLogIn(res?.userData);

      clearFormValues();
      navigate(appRoutes.WORKSHOP);
    }
  };

  const clearFormValues = () => {
    setFormValues({
      email: "",
      password: "",
    });
  };

  // Data to display
  return (
    <OnboardingTemplate
      $title="Log in to your account"
      $subTitle="Enter your detail to login"
      $contentSize="48rem"
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
          onChange={(e) => handleFormChanges("email", e.currentTarget.value)}
          value={formValues.email}
        />

        <TextInput
          $label="Password"
          type="password"
          placeholder="Please enter your email..."
          onChange={(e) => handleFormChanges("password", e.currentTarget.value)}
          value={formValues.password}
        />

        <Flex className="mt-20 mb-20" $gap="1rem" $flexRowJcBetweenAiCenter>
          <Typography as="h6" className="p6" text="Remember me" />
          <Typography as="h6" className="l3" text="Forgot your Password?" />
        </Flex>

        <PrimaryButton
          onClick={handleSubmit}
          className="w-full mt-30 size-1 with-spinner"
          disabled={loginApi?.loading}
        >
          Log in <>{loginApi?.loading && <SpinnerIcon />}</>
        </PrimaryButton>
      </Wrapper>
    </OnboardingTemplate>
  );
};

export default Login;

const formSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
