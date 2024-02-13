// //import { useLocalStorage } from '@mantine/hooks';
// import {
//     TokenLSKeys,
//     TokenService,
//   } from "../../common-services/token/token-service";
//   //import { API_ROUTES, GetApiUrl } from "../../Config/api-routes";
//   import axios from "axios";
//   //import jwtDecode from "jwt-decode";
//   import React, { useEffect, useMemo, useState } from "react";
//   //import { AuthenticationService } from "../../common-services/authentication/authentication-service";
//   //import useLocalStorage from '../../lib/uselocal/useLocalStorage'
//   //import { json } from 'react-router-dom';
//   //import { useIntervalCustom } from '../use-interval/use-interval-custom';
  
//   /**
//    * Context to store user details
//    * @typedef {Object} AuthUserContext
//    * @property {string} loginId User Login ID
//    * @property {number} userId User ID
//    * @property {object} user User Details
//    * @property {object[]} appPermissions List of Application Permissions
//    * @property {boolean} isLoading Weather user data is loading or not
//    * @property {(appFeatureNames: string | string[], matchAll?: boolean) => boolean} hasPermission Function to check if user has permission or not
//    */
  
//   interface MyToken {
//     nameid: string;
//     exp: number;
//     iat: number;
//     nbf: number;
//     // whatever else is in the JWT.
//   }
  
//   export interface IAuthContext {
//     id:  number | null,
//     networkLogin: null | string,
//     firstName: string,
//     lastName:string,
//     middleName:string,
//     appPermissions: IAppPermission[] | never[],
//     isLogin: boolean,
//     isActive: boolean,
//     isLoading : boolean,
//     roleModules: IAppModules[] | never[];
//     isTemporaryPassword : boolean | null
//   }
  
//   export interface IAppPermission {
//     userRoleId: number;
//     userId: number;
//     roleId: number;
//     isActive: boolean;
//     createdBy: number;
//     createdDate: string;
//     modifiedBy: number;
//     modifiedDate: string;
//     roleModules: IAppModules[] | never[];
//   }
  
//   export interface IAppModules {
//     id: number;
//     moduleName: string;
//     isActive : boolean
//   }
  
//   const defaultValue = {};
  
//   export const AuthUserContext = React.createContext<IAuthContext>(
//     defaultValue as IAuthContext
//   );
  
//   export const AuthUserProvider = ({ ...props }) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [user, setUser] = useState<IAuthContext>({
//         id:  -1,
//         networkLogin: null,
//         firstName: "",
//         lastName: "",
//         middleName: "",
//         appPermissions: [],
//         isLogin: false,
//         isActive: false,
//         isLoading : true,
//         roleModules: [],
//         isTemporaryPassword : null
//     });
  
//     const [accessToken] = useState(() => { 
//       return JSON.parse(JSON.stringify(localStorage.getItem(TokenLSKeys.accessToken))) || []
//     });
  
//     const authUserProviderValue : IAuthContext = useMemo(() => {
//       const result = {
//         firstName: user != null ? user.firstName : "",
//         lastName: user != null ? user.lastName : "",
//         middleName: user != null ? user.middleName : "",
//         isLogin: user != null ? user.isLogin : false,
//         isActive: user != null ? user.isActive : false,
//         networkLogin: user != null ? user.networkLogin : "",
//         id: user != null ? user.id : null,
//         appPermissions: user != null ? user.appPermissions : [],
//         roleModules : user != null ? user.roleModules : [],
//         isTemporaryPassword : user != null ? user.isTemporaryPassword : null,
//         isLoading 
//       }
//       return result;
//     }, [user, isLoading]);
  
//     const getUserDetails = async () => {
//       const token = TokenService.getAccessToken();
//       if (!token) {
//         throw new Error("access token not found");
//       }
//       const parsedToken = jwtDecode<MyToken>(token);
//       if (!parsedToken.nameid) {
//         throw new Error("user name id not present in access token");
//       }
//       //console.log(parsedToken, "parsedTokenparsedToken");
//       const loginId = parsedToken.nameid; //parsedToken.nameid.split('@')[0];
//       if (!loginId) {
//         throw new Error("unable to fetch login id");
//       }
//       const url = GetApiUrl(API_ROUTES.authenticator.getLoggedInUserDetails, {
//         networklogin: loginId,
//       });
//       const { data } = await axios.get(url);
//       if (!data) {
//         throw new Error("user data not found from API");
//       }
//       return data;
//     };
  
//     const getUserAppPermissions = async (userId: string) => {
//       if (!userId) {
//         return [];
//       }
//       const url = GetApiUrl(API_ROUTES.authenticator.getUserAppPermissions, {
//         networklogin: userId,
//       });
//       const { data } = await axios.get(url);
//       return data;
//     };
  
//     const getRolesModules = (permissions : IAppPermission[]) => {
//       const roleModule = [] as IAppModules[];
//         permissions.forEach((item : IAppPermission) => {
//           item.roleModules.forEach((mod : IAppModules) => {
//             const found = roleModule.some(el => el.id === mod.id);
//             !found ? roleModule.push(mod) : "";
//           });
//         });
//       return roleModule;
//     }
  
//     const getData = async () => {
//       try {
//         const userData = await getUserDetails();
//         const permissions = await getUserAppPermissions(userData.networkLogin);
//         userData.appPermissions = permissions;
//         userData.roleModules = getRolesModules(permissions);
//         userData.isLogin = true;
//         setUser(userData);
//       } catch (error) {
//         setUser({
//             id:  null,
//             networkLogin: null,
//             firstName: "",
//             lastName: "",
//             middleName: "",
//             appPermissions: [],
//             isLogin: false,
//             isActive: false,
//             isLoading : true,
//             roleModules : [],
//             isTemporaryPassword : null
//         });
//       }
//       setIsLoading(false);
//     };
  
//     const refeshUserToken = () => {
//       //const token = AuthenticationService.refreshTokens();
//       //console.log(token, "refresh token mouse")
//     }
  
//     useEffect(() => {
//       document.addEventListener("mousemove", refeshUserToken);
//     }, [])
  
//     useEffect(() => {
//       getData();
//     }, [accessToken]);
  
//     return (
//       <AuthUserContext.Provider value={authUserProviderValue}>
//         {props.children}
//       </AuthUserContext.Provider>
//     )
//   }
  
  
  