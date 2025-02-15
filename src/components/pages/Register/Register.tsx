/** @format */

import React, { useState } from "react";
import * as yup from "yup";

import { Divider, Wrapper } from "./style";

import { GoogleIcon, SpinnerIcon } from "components/atom/SvgIcon";
import { SelectInput, TextInput } from "components/molecules/Inputs";
import IconButton from "components/atom/button/IconButton";
import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import Typography from "components/atom/Typography";
import { PrimaryButton } from "components/atom/button";
import { useAppStore, useAuthStore } from "store";
import useFormValidation from "utils/hooks/useFormValidation";
import { useApi, useToast } from "utils/hooks";
import endpoints from "services/endpoints";
import { useNavigate } from "react-router";
import { appRoutes } from "utils/constants";

// Type defination
interface Props {}

// Component
const Register: React.FC<Props> = () => {
  // State
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone_number: "0123456789",
    password: "",
    country_id: "",
  });

  // Store
  const { countries } = useAppStore();
  const { setRegisteringUserEmail } = useAuthStore();

  // Hooks
  const { validateForm } = useFormValidation();
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  // Api
  const registerStudentApi = useApi<any>();

  // Methods
  const formatCountriesForInput = () => {
    const countriesForInput = countries?.map((country) => ({
      id: country.country_id,
      label: country.country_name,
    }));

    return countriesForInput;
  };

  const handleFormChanges = (name: string, value: any) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = { ...formValues };
    const validate = await validateForm(formSchema, payload);
    if (!validate) return;

    const res = await registerStudentApi.sendRequest(
      "POST",
      endpoints.registerStudentUrl,
      payload
    );

    if (res?.response?.data?.error) {
      const { email } = res.response.data.error;
      errorToast(email[0]);
      return;
    }

    if (res.message === "Registration Successful") {
      successToast("Account registered successfully");
      setRegisteringUserEmail(res?.email);
      clearFormValues();
      navigate(appRoutes.LOGIN);
    }
  };

  const clearFormValues = () => {
    setFormValues({
      name: "",
      email: "",
      phone_number: "0123456789",
      password: "",
      country_id: "",
    });
  };

  // Data to display
  return (
    <OnboardingTemplate
      $title="Create a new account"
      $subTitle="Enter your detail to sign up"
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
          $label="Full Name"
          $type="user"
          placeholder="Please enter your Name..."
          className="mb-20"
          onChange={(e) => handleFormChanges("name", e.currentTarget.value)}
          value={formValues.name}
        />

        <SelectInput
          $label="Location"
          placeholder="Please enter your country..."
          className="mb-20"
          $options={formatCountriesForInput()}
          name="country_id"
          $handleChange={handleFormChanges}
        />

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
          placeholder="Please enter your password..."
          onChange={(e) => handleFormChanges("password", e.currentTarget.value)}
          value={formValues.password}
        />

        <PrimaryButton
          onClick={handleSubmit}
          className="w-full mt-30 size-1 with-spinner"
          disabled={registerStudentApi?.loading}
        >
          Create account <>{registerStudentApi?.loading && <SpinnerIcon />}</>
        </PrimaryButton>
        <Typography as="h6" className="p7 text-center mt-20">
          <>
            By continuing, you agree to the{" "}
            <span className="l4">Terms and Privacy</span>
          </>
        </Typography>
      </Wrapper>
    </OnboardingTemplate>
  );
};

export default Register;

const formSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required"),
  country_id: yup.string().required("Country is required"),
  phone_number: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});
