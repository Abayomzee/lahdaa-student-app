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
      if (err.errors) errorToast(err.errors);
    }

    return response;
  };
  return { validateForm };
};
export default useFormValidation;
