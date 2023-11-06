import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Home from '../../Pages/Home/Home';
import RadioPage from '../../Pages/RadioPage/RadioPage';
import LibraryPage from '../../Pages/AddProject/AddProject';
import SearchPage from '../../Pages/SearchPage/SearchPage';

interface ContainerProps { }

const Tab: React.FC<ContainerProps> = () => {
  return (
  //   <IonReactRouter>
  //   <IonTabs>
  //     <IonRouterOutlet>
  //       <Redirect exact path="/" to="/home" />
  //       {/*
  //       Use the render method to reduce the number of renders your component will have due to a route change.

  //       Use the component prop when your component depends on the RouterComponentProps passed in automatically.
  //     */}
  //       {/* <Route path="/home" render={() => <Home/>} exact={true} />
  //       <Route path="/radio" render={() => <RadioPage/>} exact={true} />
  //       <Route path="/library" render={() => <LibraryPage />} exact={true} />
  //       <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
  //     </IonRouterOutlet>

  //     <IonTabBar slot="bottom">
  //       <IonTabButton tab="home" href="/home">
  //         {/* <IonIcon icon={playCircle} /> */}
  //         <IonLabel>Listen now</IonLabel>
  //       </IonTabButton>

  //       <IonTabButton tab="radio" href="/radio">
  //         {/* <IonIcon icon={radio} /> */}
  //         <IonLabel>Radio</IonLabel>
  //       </IonTabButton>

  //       <IonTabButton tab="library" href="/library">
  //         {/* <IonIcon icon={library} /> */}
  //         <IonLabel>Library</IonLabel>
  //       </IonTabButton>

  //       <IonTabButton tab="search" href="/search">
  //         {/* <IonIcon icon={search} /> */}
  //         <IonLabel>Search</IonLabel>
  //       </IonTabButton>
  //     </IonTabBar>
  //   </IonTabs>
  // </IonReactRouter>
  <div>
    wjhgdw
  </div>
    );
};

export default Tab;
