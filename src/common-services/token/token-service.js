/**
 * Local storage keys used to store tokens
 */
export const TokenLSKeys = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
  };
  
  export const TokenService = {
    /**
     * Function to save tokens in the local storage
     * @param {string} accessToken Access Token of logged in user
     * @param {string} refreshToken Refresh Token of logged in user
     */
    setTokens: (accessToken, refreshToken) => {
      accessToken = accessToken || '';
      refreshToken = refreshToken || '';
  
      if (typeof accessToken !== 'string') {
        accessToken = accessToken.toString();
      }
      if (typeof refreshToken !== 'string') {
        refreshToken = refreshToken.toString();
      }
  
      localStorage.setItem(TokenLSKeys.accessToken, accessToken);
      localStorage.setItem(TokenLSKeys.refreshToken, refreshToken);
    },
  
    /**
     * Function to retrieved tokens from the local storage
     * @returns object: {accessToken, refreshToken}
     */
    getTokens: () => {
      const accessToken = localStorage.getItem(TokenLSKeys.accessToken) || '';
      const refreshToken = localStorage.getItem(TokenLSKeys.refreshToken) || '';
      return {
        accessToken,
        refreshToken,
      };
    },
  
    /**
     * Function to retrieve access token from local storage
     * @returns access token
     */
    getAccessToken: () => {
      return localStorage.getItem(TokenLSKeys.accessToken) || '';
    },
  
    /**
     * Function to retrieve refresh token from local storage
     * @returns refresh token
     */
    getRefreshToken: () => {
      return localStorage.getItem(TokenLSKeys.refreshToken) || '';
    },
  
    /**
     * Function to delete refresh token and access token from local storage
     */
    clearTokens: () => {
      localStorage.removeItem(TokenLSKeys.accessToken);
      localStorage.removeItem(TokenLSKeys.refreshToken);
    },
  };
  