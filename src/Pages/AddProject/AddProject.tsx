import React from 'react'
import PageLayout from '../../Layout/PageLayout/PageLayout'
import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react'
import { add } from 'ionicons/icons';
const AddProject=()=> {
const router =useIonRouter();
  const AddProjectData=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    router.goBack();
  }
  return (
    <>
    <IonPage>   <IonHeader>
    <IonToolbar>
    <IonButtons slot='start'>
        <IonBackButton defaultHref='/'/>
      </IonButtons>
      <IonTitle color={'success'}>Add Project</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className='ion-justify-content-center'>
  <IonCard className='ion-padding' >
  <form onSubmit={AddProjectData}>
  <IonInput className='ion-margin-top' label="Project Name" type='text' labelPlacement="floating" fill='outline' placeholder="Enter Project Name"></IonInput>
  <IonInput className='ion-margin-top' label="Assigned" type='text' labelPlacement="floating" fill='outline' placeholder="Assigned to"></IonInput>
  <IonInput className='ion-margin-top' label="Investment" type='text' labelPlacement="floating" fill='outline' placeholder="Investment"></IonInput>
  <IonInput className='ion-margin-top' label="Due Date" type='number' labelPlacement="floating" fill='outline' placeholder="Investment"></IonInput>
  <IonInput className='ion-margin-top' label="Due Date" type='number' labelPlacement="floating" fill='outline' placeholder="Investment"></IonInput>
      <IonButton type='submit' expand="full" shape="round" className='ion-margin-top' color={"success"}>Add Project
      <IonIcon slot="end"  icon={add}></IonIcon>
      </IonButton>
      </form>
    </IonCard>
    </IonContent>
    </IonPage>

    </>
  )
}

export default AddProject
