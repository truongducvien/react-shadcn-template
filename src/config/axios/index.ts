import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getLS, setLS } from '@/utils/localStorage';

let isRefreshingToken = false;

const apiInstance = axios.create({
  baseURL: '',
  timeout: 5 * 60 * 1000, // 5 minutes
});

const waitForTokenRefresh = (retry: number = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isRefreshingToken && retry > 0) {
        resolve(waitForTokenRefresh(retry - 1));
      } else {
        resolve(true);
      }
    }, 1000);
  });
};

// You should create a new axios instance to request for refreshing token:
const refreshToken = async (token: string) => {};

const handleRequestFulfilled = async (config: InternalAxiosRequestConfig) => {
  if (!isRefreshingToken) await waitForTokenRefresh();
  return config;
};

const handleResponseFulfilled = (res: AxiosResponse) => res;

const handleResponseRejected = async (error: AxiosError) => {
  const originalConfig = error.config;
  if (originalConfig && error.response?.status === 401 && !isRefreshingToken) {
    const refresh_token = getLS('RefreshToken');
    try {
      isRefreshingToken = true;
      const newToken = await refreshToken(refresh_token);
      // Update the last request config with new bearer token:
      apiInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
      originalConfig.headers.Authorization = `Bearer ${newToken}`;

      // Save new token to local storage, or Cookie as well:
      setLS('Token', newToken);

      // Save new user information here:
      return apiInstance(originalConfig);
    } catch (error) {
      console.log(error);
      // Handle logging out when refresh token api returns error:
    } finally {
      isRefreshingToken = false;
    }
  }
  return Promise.reject(error);
};

// Interceptors:
apiInstance.interceptors.request.use(handleRequestFulfilled);
apiInstance.interceptors.response.use(handleResponseFulfilled, handleResponseRejected);

export default apiInstance;
