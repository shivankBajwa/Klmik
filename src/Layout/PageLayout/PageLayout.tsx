import { IonContent, IonFooter, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../Header/Header'
import Tab from '../Tab/Tab'

function PageLayout(props:any) {
  return (
   <IonPage>
      <IonContent fullscreen> 
         
 {props.children} 

</IonContent>

  <Tab/>

    </IonPage>
  )
}

export default PageLayout
