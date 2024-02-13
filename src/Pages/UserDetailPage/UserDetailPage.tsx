import { IonButton, IonCard, IonInput, IonText } from '@ionic/react'
import React from 'react'

const UserDetailPage = () => {
  return (
    <div className='main-body-login'>
        <IonCard className='displayFlexColumn ion-padding' >
            <IonText>
                <h1>Enter your deatils</h1>
            </IonText>
       <IonInput className='ion-margin-vertical' shape='round' label="First Name" type='text' labelPlacement="floating" fill='outline' placeholder="Enter First Name" ></IonInput>
       <IonInput className='' shape='round' label="Last Name" type='text' labelPlacement="floating" fill='outline' placeholder="Enter Last Name" ></IonInput>
       <IonInput maxlength={10} className='ion-margin-vertical ' shape='round' label="Phone No" type='number' labelPlacement="floating" fill='outline' placeholder="Enter Phone No." ></IonInput>
       <IonButton type='submit'  onClick={()=>{}} expand="full" shape="round" className='ion-margin-top' color={"secondary"}>Submit
           </IonButton>      
    </IonCard>
  
    </div>
    )
}

export default UserDetailPage
