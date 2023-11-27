import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react'
import React, { Profiler } from 'react'
import Header from '../Header/Header'
import Tab from '../Tab/Tab'
import { boat, home, mail, person, returnUpForward, settings, wallet } from 'ionicons/icons';

interface headerDetails{
  ToolbarName:string,
  backButtonVisibility?:boolean,
  backButtonHref?:string ,
  children: React.ReactNode,
  showTabs?:boolean
}
const  PageLayout=({ToolbarName,children,backButtonVisibility=true,showTabs=true,backButtonHref}:headerDetails)=> {
  return (
   <IonPage>
    <IonHeader>
    <IonToolbar>
      {backButtonVisibility===true? <IonButtons slot='start'>
        <IonBackButton defaultHref={backButtonHref}/>
      </IonButtons>:<div></div>}
      <IonTitle color={'success'}>{ToolbarName}</IonTitle>
    </IonToolbar>
  </IonHeader>

      {showTabs ? (
        <IonContent>
           <IonTabs>
          <IonRouterOutlet>
            <IonContent>
              {children}
            </IonContent>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="settings" href="/projectInfo">
              <IonIcon icon={wallet} />
              <IonLabel>Project</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Report" href="/userTask">
              <IonIcon icon={mail} />
              <IonLabel>TASK</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        </IonContent>

      ) : (
        <IonContent fullscreen>
          {children}
        </IonContent>
      )}

  

    </IonPage>
    
  )
}

export default PageLayout
