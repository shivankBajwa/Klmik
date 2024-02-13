import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Pages/Home/Home';
import { initializeApp } from 'firebase/app';
import { Capacitor } from '@capacitor/core';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ExploreContainer from './Layout/Tab/Tab';
import AddProject from './Pages/AddProject/AddProject';
import Tab from './Layout/Tab/Tab';
import AddMoney from './Components/AddMoney/AddMoney';
import StaffCard from './Components/StaffCard/StaffCard';
import ProjectInfo from './Pages/ProjectInfo/ProjectInfo';
import StaffReport from './Pages/StaffReport/StaffReport';
import UserLandingPage from './Pages/UserLandingPage/UserLandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import UserDetailPage from './Pages/UserDetailPage/UserDetailPage';

//import { useEffect } from 'react';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

setupIonicReact();
// var firebaseConfigAndroid = {
//   apiKey: "API_KEY",
//   authDomain: "PROJECT_ID.firebaseapp.com",
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL: "https://DATABASE_NAME.firebaseio.com",
//   projectId: "PROJECT_ID",
//   storageBucket: "PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
//   // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//   measurementId: "G-MEASUREMENT_ID",
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyD9l1LG9GinyWcVe7hCgO09boT6yfPulng",
//   authDomain: "klmik-c7037.firebaseapp.com",
//   projectId: "klmik-c7037",
//   storageBucket: "klmik-c7037.appspot.com",
//   messagingSenderId: "396379373601",
//   appId: "1:396379373601:web:5f5d49d840dc34aabaa360",
//   measurementId: "G-WXBZ1FJDPM"
// };

const App: React.FC = () => {
//   useEffect(() => {
//     // Initialize Firebase
//     if (Capacitor.isNativePlatform()) {
//       // For native platforms (iOS, Android)
//       const firebase = initializeApp(firebaseConfigAndroid);
//     } else {
//       // For web platform
//       // Firebase initialization code for web (if needed)
//       const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//     }
//   }, []);

  return(
<IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/userDetail">
          <UserDetailPage/>
        </Route>
        <Route exact path="/home">
          <Tab/>
        </Route>
        {/* <Route exact path="/projectInfo">
          <Tab/>
        </Route> */}
        <Route exact path="/">
          <Redirect to="/home"/>
          <Tab/>
        </Route>
        <Route exact path="/tab2">
          <Redirect to="/tab2"/>
          <Tab/>
        </Route>
        <Route exact path="/tab1">
          <Redirect to="/tab1"/>
          <Tab/>
        </Route>
        {/* <Route exact path="/projectInfo">
          <Redirect to="/projectInfo"/>
          <Tab/>
        </Route> */}
        <Route exact path="/addProject">
          <AddProject/>
        </Route>
        <Route exact path="/addMoney">
          <AddMoney/>
        </Route>

        <Route exact path="/projectInfo">
          <ProjectInfo/>
        </Route> 
        <Route exact path="/staffReport">
          <StaffReport/>
        </Route>

        <Route exact path="/userLanding">
          <UserLandingPage/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
   {/* <Home/> */}
   
   
   </IonApp>
  )
}
  

export default App;
