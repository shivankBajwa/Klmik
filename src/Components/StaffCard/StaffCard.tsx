import { IonBackButton, IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react'
import React from 'react'
import ShivankPhoto from "../../assets/shivankPhoto.png"
import "./StaffCard.css"

function StaffCard() {
  const router=useIonRouter();
  const AddMoney=()=>{
    router.push(
      '/addMoney','root'
    )
    }
    const ViewDetails=()=>{
      router.push(
        '/staffReport','root'
      )
      }
  return (
    <div>
      
         <IonCard className='gapAdjustment'  color={"light"} >         
    <IonGrid>
    <IonRow className='ion-justify-content-center'>
      <IonCol className='flexProp' size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            <img src={ShivankPhoto} width={"70px"} height={"70px"}/>
        </IonCol>   
        <IonCol className='flexProp' sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            You gave
        </IonCol>
        <IonCol className='flexProp' size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            Spended
        </IonCol>
        </IonRow>
         <IonRow >
      <IonCol className='flexProp'  size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            Shivank
        </IonCol>   
        <IonCol className='flexProp'  size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
        1,000,00
        </IonCol>
        <IonCol className='ion-text-center'  size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            50,000
        </IonCol>
        </IonRow>
        
    
      <IonRow >
      <IonCol  size='12' sizeXs='6' sizeMd='6' sizeLg='6'sizeSm='6'>
    
      <IonButton style={{width:"100%"}}  size='small' onClick={AddMoney} type="button">Add Cash</IonButton>
      
      </IonCol>
      <IonCol  size='12' sizeXs='6' sizeMd='6' sizeLg='6'sizeSm='6'>
    
      <IonButton style={{width:"100%"}}  size='small' onClick={ViewDetails} type="button">View Details</IonButton>
      
      </IonCol>
    </IonRow>
          {/* <IonButton onClick={AddNewProject} type="button">
            <IonIcon icon={add} size="large"></IonIcon>
            </IonButton>
            <IonCardSubtitle className='ion-padding'>Add New Project</IonCardSubtitle>
        */}
        </IonGrid>
    </IonCard>
  {/* //#1b3a70 */}
    </div>
  )
}

export default StaffCard
