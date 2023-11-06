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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
  <IonPage>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/addProject">
        
          <AddProject/>
        </Route>
        <Route exact path="/tab">
        
        <Tab/>
      </Route>
      
      </IonRouterOutlet>
    </IonReactRouter>
   {/* <Home/> */}
   
   </IonPage>
   </IonApp>
);

export default App;
