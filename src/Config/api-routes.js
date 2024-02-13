import { APP_DATA } from "./app-data";

/**
 * Function to get API url after parameter subsitiutions
 * @param {string} API_ROUTE Route from API_ROUTES object
 * @param {object} params Object for parameter subsitution
 * @returns {string} API Url
 */
export const GetApiUrl = (API_ROUTE, params = {}) => {
  let url = API_ROUTE;
  const regex =   /\{(.*?)\}/gim;
  const replacements = url.match(regex);
  if (!replacements) {
    return url;
  }
  replacements.forEach((key) => {
    const objectKey = key.replace("{", "").replace("}", "");
    let value = params[objectKey];
    if (value === null || typeof value === "undefined") {
      value = "";
    }
    url = url.replace(key, encodeURIComponent(value));
  });
  return url;
};


export const API_ROUTES =
 {
    authenticator: {
        login: `${APP_DATA.authenticator.apiUrl}/api/Authenticaion/AuthenticateUserFromDB`,
        refreshTokens: `${APP_DATA.authenticator.apiUrl}/api/Authenticaion/RefreshToken`,
        getLoggedInUserDetails: `${APP_DATA.authenticator.apiUrl}/api/User/GetUserDetails?NetworkLogin={networklogin}`,
        getUserAppPermissions: `${APP_DATA.authenticator.apiUrl}/api/User/GetUserRoles?NetworkLogin={networklogin}`,
      },
};