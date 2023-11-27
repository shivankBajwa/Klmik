import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonInput, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { useRef, useState } from 'react'

function InputExpenditure() {
   const [isOpen,setIsOpen]=useState(false);
  return (
    <>
      <IonModal isOpen={isOpen} trigger="open-modal" initialBreakpoint={0.75} breakpoints={[0,0.5,0.75, 1]}>
      
      <IonHeader>
            <IonToolbar>
              <IonTitle>Expenditure Details</IonTitle>
              {/* <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons> */}
            </IonToolbar>
          </IonHeader>
          <IonContent className="">
          <IonCard className='ion-padding'>
          <IonInput className='ion-margin-top ' label="Purpose" labelPlacement="floating" fill="outline" placeholder="Enter Purpose"></IonInput>
          <IonInput  className='ion-margin-top' label="Money" type='date' labelPlacement="floating" fill="outline" placeholder="Enter Purpose"></IonInput>
          <IonInput  className='ion-margin-top ion-margin-bottom' label="select an option" labelPlacement="floating" fill="outline" placeholder="Enter Purpose"></IonInput>
    </IonCard>
    </IonContent>
    </IonModal>
           <IonButton id="open-modal" expand="block" onClick={()=>setIsOpen(true)}>
           Open Sheet Modal
         </IonButton>
         </>
  )
}

export default InputExpenditure
