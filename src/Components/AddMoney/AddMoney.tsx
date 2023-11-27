import { IonBackButton, IonButton, IonButtons, IonCard, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import PageLayout from '../../Layout/PageLayout/PageLayout'

function AddMoney() {
  return (
    
    <PageLayout ToolbarName='Add Money' backButtonVisibility={true} backButtonHref={"/projectInfo"} >
  
        <IonCard className='ion-margin-top ion-padding'>
       <IonInput label="Money" labelPlacement="floating" fill="outline" placeholder="Enter Money"></IonInput>
       <IonInput label="Date" labelPlacement="floating" fill="outline" placeholder="Enter Date"></IonInput>
       <IonButton type='submit' expand="full" shape="round" size='default' className='ion-margin-top'>Add Money</IonButton>
       </IonCard>
       </PageLayout>
  )
}

export default AddMoney
