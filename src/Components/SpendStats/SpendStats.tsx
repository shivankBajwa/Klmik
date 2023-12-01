import { IonCard, IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react'
import React from 'react'

function SpendStats() {
  return (
    <IonCard className='' >
    <IonGrid>
        <IonRow>
            <IonCol size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            <IonItem lines='none' style={{borderRightStyle:"dotted"}}>
                <IonLabel ><p style={{color:"green"}}>You Got</p><p style={{color:"green"}}>1,00,000</p></IonLabel></IonItem>
                {/* <IonItem lines='none'>1,00,000</IonItem> */}
            </IonCol>
            <IonCol size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            <IonItem lines='none' style={{borderRightStyle:"dotted"}} >
                <IonLabel class="ion-text-wrap" >
                    <p style={{color:"red"}}>Spend</p>
                    <p style={{color:"red"}}>50,000</p>
                    </IonLabel>
               </IonItem>
       
            </IonCol>
            <IonCol size='12'sizeSm='4' sizeXs='4' sizeMd='4' sizeLg='4' sizeXl='4'>
            <IonItem lines='none'  >
                <IonLabel class="ion-text-wrap" >
                    <p style={{color:"blue"}}>Left</p>
                    <p style={{color:"blue"}}>50,000</p>
                    </IonLabel>
               </IonItem>
            </IonCol>
        </IonRow>
    </IonGrid>
{/* <IonItem lines='none'>Wallet Moneby</IonItem>
<IonItem lines='none'>5</IonItem> */}
</IonCard>
  )
}

export default SpendStats
