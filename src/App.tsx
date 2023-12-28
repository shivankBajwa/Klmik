import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './Pages/Home/Home';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
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
);

export default App;
