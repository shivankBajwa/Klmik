import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Home from '../../Pages/Home/Home';
import { home, square, triangle } from 'ionicons/icons';
import Tab2 from './Tab2';
import { Tab1 } from './Tab1';

interface ContainerProps { }

const Tab= () => {
  return (
    <>
      {/* <IonContent>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
<div>shivank</div>
<br/>
      </IonContent> */}
    {/* <IonHeader>
      <IonToolbar>
        <IonTitle>Shivank</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      uwgdjfjerhb
    </IonContent> */}
  <IonTabs>
    <IonTabBar slot='bottom'>
      <IonTabButton tab="tab1" href="/home">
<IonIcon icon={home}/>
<IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
<IonIcon icon={triangle}/>

<IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tab1">
<IonIcon icon={triangle}/>
<IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>

    <IonRouterOutlet>
    <Route path="/home" component={Home}/>
      <Route path="/tab1" component={Tab1}/>
      <Route path="/tab2" component={Tab2}/>
      
      {/* <Route exact path={"/"}>
        <Redirect to="/home"/>
      </Route> */}
    </IonRouterOutlet>
  </IonTabs>
  </>
    );
};

export default Tab;
