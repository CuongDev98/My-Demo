// useFetchApi.tsx
import { useState } from "react";
import type { AxiosResponse, Method } from "axios";
import { axiosClient } from "../services";

interface UseFetchApiProps<T = any, B = any> {
  url: string;
  method?: Method;
  data?: B;
  onSuccess?: (response: T) => void;
  onFailed?: (error: unknown) => void;
}

interface UseFetchApiReturn<T = any> {
  loading: boolean;
  error: unknown;
  callApi: () => Promise<T | null>;
}

export function useFetchApi<T = any, B = any>({
  url,
  method = "GET",
  data,
  onSuccess,
  onFailed,
}: UseFetchApiProps<T, B>): UseFetchApiReturn<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const callApi = async (): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<T> = await axiosClient.request<T>({
        url,
        method,
        data,
      });
      onSuccess?.(response.data);
      return response.data;
    } catch (err: unknown) {
      setError(err);
      onFailed?.(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, callApi };
}
