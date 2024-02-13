/**
 * @type {string}
 */


//export const API_URL = 'http://103.48.50.209/coatingapi';
export const API_URL =  window.config.apiUrl;
export const BASE_APP_URL = window.config.appUrl;
/**
 * @type {string}
 */
export const REPORT_SERVER_URL = '';

export const APP_ROUTES = {
    login: '/login',
    logout: '/logout',
    resetpassword: '/resetpassword',
    forgotpassword: '/forgotpassword',
  };

  export const MAIN_ROUTES = {
    mainpage:  '/',
    coating: '/coating',
    coatinghrs: '/coatinghrs',
    combinedjobnumbers: '/combinedjobnumbers',
    coatinggraph: '/coatinggraph',
    basicpage: '/basic-page',  
    conveyor: '/conveyor',
    adduser: '/adduser', 
    coatingschedule: '/coatingschedule',
    jobprofiledata: '/jobprofiledata',
    coatjob: '/coatjob',
    exporthrsbydateloc: '/exporthrsbydateloc',
    alreadyConfirmDataPage: '/alreadyconfirmdata',
    materialpopup: '/materialpopup',
    master: '/master',
    coatingOvendataPage : '/coatingOvendataPage',
    qafunctionality:  '/qafunctionality',
    qadashboard: '/adashboard'
  };


export const APP_DATA = {
    authenticator: {
      id: 1,
      apiUrl: API_URL,
      title: 'AppShell',
      description: 'An application used to launch other Denora applications.',
    }
  }