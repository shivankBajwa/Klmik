import { IonBackButton, IonButton, IonButtons, IonChip, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react'
import React, { Profiler } from 'react'
import Header from '../Header/Header'
import Tab from '../Tab/Tab'
import { add, boat, home, mail, person, returnUpForward, settings, wallet } from 'ionicons/icons';

interface headerDetails{
  ToolbarName:string,
  backButtonVisibility?:boolean,
  backButtonHref?:string ,
  children: React.ReactNode,
  showTabs?:boolean,
  addButtonVisibility?:boolean,
  onClickAdd?: () => void;
}
const  PageLayout=({ToolbarName,children,backButtonVisibility=true,showTabs=true,addButtonVisibility=false,backButtonHref,onClickAdd}:headerDetails)=> {
  
  
  
  return (
   <IonPage>
    <IonHeader>
    <IonToolbar>
  
      {backButtonVisibility===true? <IonButtons slot='start'>
        <IonBackButton defaultHref={backButtonHref}/>
      </IonButtons>:""}
  <IonTitle slot='start' color={'primary'} >{ToolbarName}</IonTitle>
      {addButtonVisibility ? <IonButtons slot="end">
                <IonButton onClick={(e)=>onClickAdd && onClickAdd()}><IonIcon size='large' icon={add}></IonIcon></IonButton>
              </IonButtons>:""}
<IonChip slot='end' color={'primary'}>SC</IonChip>
    </IonToolbar>
  </IonHeader>
 
{/* 
      {showTabs ? (
        <IonContent>
           <IonTabs>
          <IonRouterOutlet>
            <IonContent fullscreen>
              {children}
            </IonContent>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/">
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
       null
      )} */}
<IonContent fullscreen>
          {children}
        </IonContent>
  

    </IonPage>
    
  )
}

export default PageLayout
