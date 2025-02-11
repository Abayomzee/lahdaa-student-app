/** @format */
import { Schema } from "yup";

import useToast from "./useToast";

// Component
const useFormValidation = () => {
  // Hooks
  const { errorToast } = useToast();

  //   Method
  const validateForm = async (schema: Schema, payload: any) => {
    let response = false;

    try {
      await schema.validate(payload);
      response = true;
    } catch (err: any) {
      console.log({ errrrrrr: err.errors });
      if (err.errors.length) errorToast(err.errors[0]);
    }

    return response;
  };
  return { validateForm };
};
export default useFormValidation;
