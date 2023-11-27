import { IonCard, IonCardContent } from '@ionic/react'
import React from 'react'

import dounutChart from '../../assets/simple-donut-chart.svg'
import PageLayout from '../../Layout/PageLayout/PageLayout'

function StaffDetails() {
  return (
    <PageLayout ToolbarName='Staff Report' backButtonHref='/projectInfo'>
      <h1 style={{padding:"10px"}}>Details of Shivank</h1>
      <IonCard>
        <IonCardContent>
        <img src={dounutChart} width={"100%"} height={"250px"}/>
        </IonCardContent>
      </IonCard>
    </PageLayout >
  )
}

export default StaffDetails
