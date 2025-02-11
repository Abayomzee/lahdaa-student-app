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
import { useAppStore } from "store";
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
    setFormValues((values) => ({ ...formValues, [name]: value }));
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

    /**
 * {
    "message": "Registration Successful",
    "user_id": 41,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiZTVjZjBjOTMzZjQwZGYwMzNiMTQ4M2U1MWE2YTRjZTg3MTNiODVkZWE0NTEzOGEzODA5OWY5NWUzMzE1ZmE2NzI2ODQ5ZTFkZmMwYTBiODgiLCJpYXQiOjE3MzkyNjAyMzEuNzQyNzQ2LCJuYmYiOjE3MzkyNjAyMzEuNzQyNzQ4LCJleHAiOjE3NzA3OTYyMzEuNzM0NDk2LCJzdWIiOiI0MSIsInNjb3BlcyI6W119.XXpb1KOJrkA3nroOEiEvmfAH0OQ5hP46wFSXgJR27ynrYoEp8oC3FzWP1bSmD8GMzcgdbbnlVmeFds-NSt3DV8NBf3LXc-QSWpDBegFhtTHdEmSLpZ8YASCRTvUPc4YZXiGgpltGExt-S9Ru6asFapuD1eRgwjCzlrX3-lXPdAZsthrOVZXLzDjw4iPtgxJAc09Guv1P8L4aDmqi_B6AMvW3TJiW00PoxvaaGLiJXvoq42rCK-0lScpQUxDaht4VtYsXBiZXYLIXSEmOz5A9D46X2AqbpaQ-cR_PJzsxWFlehTCeXa7bEkmEYbpLYA8v0JsU9ojs5oxB_r5p4WtbrJbHzsSpbeSzvw9QahMElfCbXYQTmgtjnj-8rQDmVegoZUn-NcYeLkDKocpgBIM5ZQtY8ghPr89UFEeTVlEOUVWHFKcKgZLD_I5pyIrJjrcj1epKKgCmMGIRu4x3ODJQkl1ITCi2jCkyt_kBtgYld-21dN-KE03y-ZcmdB5OCN6fWgR1Yor92TiSsBowv0DYvhxrvRx1c-Q6uNmvibP8dgpHlWQ_fQX3RLqvyis_YrfPK7amODDPeu2im2sdpBJbFkRXm1D_aXI_ISGLpdjLBKB5EA3hsAlyl9-tix0GasSmerIY-8Tc1_tdMYF3Lj5LASwTBRwJ-dq1mX8rw3_FiQ0",
    "email": "ab1@yopmail.com",
    "activation_code": "VbbHCv90O52NZhJf67lqoJUuEnPQ7zqJ",
    "activation_url": "https://app.steviapro.com/verify/VbbHCv90O52NZhJf67lqoJUuEnPQ7zqJ"
}
 */
    if (res.message === "Registration Successful") {
      successToast("Account registered successfully");
      clearFormValues();
      navigate(appRoutes.VERIFY);
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
