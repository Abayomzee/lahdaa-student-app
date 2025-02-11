/** @format */

import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import useToast from "./useToast";
import { API_RESPONSE_MESSAGES } from "utils/constants";
// import { useNavigate } from "react-router-dom";
import { useAuthStore } from "store";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
const baseUrl = process.env.REACT_APP_API_URL || "";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useApi = <T,>() => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: false,
    error: null,
  });

  // const navigate = useNavigate();
  const { userLogOut } = useAuthStore();
  const { errorToast } = useToast();

  const sendRequest = async (
    method: HttpMethod,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    setResponse({ data: null, loading: true, error: null });
    let response;

    try {
      const axiosConfig: AxiosRequestConfig = {
        method,
        url: `${baseUrl}${url}`,
        data,
        ...config,
      };

      const axiosResponse: AxiosResponse<T> = await axios(axiosConfig);

      setResponse({
        data: axiosResponse.data,
        loading: false,
        error: null,
      });
      response = axiosResponse.data;
    } catch (error: any) {
      setResponse({ data: null, loading: false, error });
      response = error;

      if (error?.response?.data) {
        const { message, statusCode } = error?.response?.data;

        if (
          message === API_RESPONSE_MESSAGES.UNAUTHORIZED &&
          statusCode === 401
        ) {
          errorToast("Login! to have full access");
          userLogOut();
          //   // navigate(appRoutes.LOGIN);
        }
      }
    }

    return response;
  };

  return { ...response, sendRequest };
};

export default useApi;
