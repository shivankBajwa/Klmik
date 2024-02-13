import axios from 'axios';
//import { parseISO } from 'date-fns';
import { ShowAlert } from '../../lib/toast/toastify';
import { AuthenticationService } from '../authentication/authentication-service';
//import { JoinRelativeUrl } from '../browser-utility/browser-utility';
import { TokenService } from '../token/token-service';
import { BASE_APP_URL, APP_ROUTES } from "../../Config/app-data";

const showErrorAlertForApiCall = (error) => {
  console.log(error, "errorerrorerror")
  let message;
  //console.log(error, "api error msg");
  if (error.code === 'ERR_NETWORK' || error.code === 'ERR_BAD_REQUEST' || error.code == "ERR_BAD_RESPONSE") {
    message = error.message; //'Unable to connect with API Server';
  }
  if (!message) {
    return;
  }
  console.log(error, "api error msg");
  ShowAlert(message, "error");
};

export const EnableAuthenticationInterceptors = () => {
  
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      // Add Access Token in Request Headers
      const accessToken = TokenService.getAccessToken();
      if (accessToken) {
        config.headers['Authorization'] = 'Bearer ' + accessToken;
        //config.headers['Access-Control-Allow-Origin'] = 'http://192.168.0.126';
          // config.headers['Access-Control-Allow-Origin'] = 'https://localhost:7130';
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // Check if request failed because of expired access token
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const tokens = await AuthenticationService.refreshTokens();
          if (tokens.accessToken) {
            originalRequest.headers['Authorization'] = 'Bearer ' + tokens.accessToken;
            return axios(originalRequest);
          }
        } catch (error) {
          console.log('Refresh Token API Invalid Response', error);
          error.response?.status == error.code;
          const loginUrl = BASE_APP_URL + APP_ROUTES.login;
          if (window.location.pathname !== loginUrl) {
            window.location.href = loginUrl;
          }
          //window.location.href = APP_ROUTES.login;
        }
      } else if (
        error.response?.status == 400 &&
        error.response?.data?.reason == 'Invalid Token Details.'
      ) {
        AuthenticationService.doLogout();
      } else {
        // Handle all other errors
        const loginUrl = APP_ROUTES.login;
        if (window.location.pathname !== loginUrl) {
            showErrorAlertForApiCall(error);
        }
      }

      return Promise.reject(error);
    }
  );
};

export const EnableDateInterceptors = () => {
  const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?$/;

  /**
   * Function to check if value is a valid ISO date string
   * @param {any} value Data to check for date
   * @returns {boolean} True if value is a valid ISO date string
   */
  const isIsoDateString = (value) => {
    return value && typeof value === 'string' && isoDateFormat.test(value);
  };

  /**
   * Function to convert date strings in object to date type
   * @param {any} body Object to check and convert strings to dates
   * @returns {any} Transform object in which date strings are converted to date
   */
  const handleDates = (body) => {
    if (body === null || body === undefined || typeof body !== 'object')
      return body;

    for (const key of Object.keys(body)) {
      const value = body[key];
      if (isIsoDateString(value)) body[key] = null;//parseISO(value);
      else if (typeof value === 'object') handleDates(value);
    }
  };

  axios.interceptors.response.use((response) => {
    handleDates(response.data);
    return response;
  });
};
