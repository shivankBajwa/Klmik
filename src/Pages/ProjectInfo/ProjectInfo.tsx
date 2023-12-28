import { IonButton, IonCard, IonCol, IonGrid, IonRange, IonRow } from '@ionic/react'
import StaffCard from '../../Components/StaffCard/StaffCard'
import PageLayout from '../../Layout/PageLayout/PageLayout'
import pieChart from "../../assets/simple-donut-chart.svg"
import "./ProjectInfo.css"
function ProjectInfo() {

  return (
    <>
    <PageLayout ToolbarName='Project Details' backButtonHref='/'>
    <IonGrid>
    <IonRow className=''>
      <IonCol className='' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='6' sizeXl='6'>
      <IonCard className='gapCardAdjustment1'>
        <img src={pieChart} width={"100%"} height={"200px"}/>
      </IonCard>
         </IonCol>
         <IonCol  size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='6' sizeXl='6'>
         <IonCard className='gapCardAdjustment2'> 
         <img src={pieChart} width={"100%"} height={"200px"}/>
         </IonCard>
         </IonCol>
         </IonRow>
         </IonGrid>
         <IonCard  className='gapAdjustment'>
          <h4>Project Progress</h4>
         <IonRange aria-label="Custom range" value={50} pin={true} onIonChange={({ detail }) => console.log('ionChange emitted value: ' + detail.value)}
  ></IonRange>
         </IonCard>
         <IonGrid>
    <IonRow >
      <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
<IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Request Demand</IonButton>
   </IonCol>
   <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
   <IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Task List</IonButton>        
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonButton color={"danger"} shape='round' className='-webkit-fill-available' >Report</IonButton>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Assign Task</IonButton>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Add Eqiupment</IonButton>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Add staff</IonButton>
        </IonCol>

        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Fulfill demand</IonButton>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonButton color={"danger"} shape='round' className='-webkit-fill-available'>Add Expenditure</IonButton>
        </IonCol>
   </IonRow>
   </IonGrid>
         <StaffCard/>
           <StaffCard/>
           <StaffCard/>
           <StaffCard/>
           <StaffCard/>
           <StaffCard/>
  </PageLayout>
  {/* <IonButton id="click-trigger">Left-Click Me</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent class="ion-padding"><img src={dounutChart} width={"500px"} height={"500px"}/></IonContent>
      </IonPopover> */}
    </>
  )
}

export default ProjectInfo
