import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonInput, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { useRef, useState } from 'react'

function InputExpenditure() {
    
  return (
    <>
          <IonContent className="">
          <IonCard className='ion-padding'>
          <IonInput className='ion-margin-top ' label="Purpose" labelPlacement="floating" fill="outline" placeholder="Enter Purpose"></IonInput>
          <IonInput  className='ion-margin-top' label="Money" type='date' labelPlacement="floating" fill="outline" placeholder="Enter Purpose"></IonInput>
          <IonInput  className='ion-margin-top ion-margin-bottom' label="select an option" labelPlacement="floating" fill="outline" placeholder="Enter Purpose"></IonInput>
    </IonCard>
    </IonContent>
         
         </>
  )
}

export default InputExpenditure
