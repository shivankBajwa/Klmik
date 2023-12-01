import { IonAccordion, IonAccordionGroup, IonAvatar, IonButton, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import PageLayout from '../../Layout/PageLayout/PageLayout'
import ShivankPhoto from "../../assets/shivankPhoto.png"
import { bug, close, flashOutline, trophy } from 'ionicons/icons'
import '../../Global.css'
import SpendStats from '../../Components/SpendStats/SpendStats'
import Modal from '../../Modal/PopupModal/Modal'
import InputExpenditure from '../../Components/InputExpenditure/InputExpenditure'
function UserLandingPage() {

    const AddTask=()=>{
        debugger;
        setExpenditure(false);
    }

    const[expenditure,setExpenditure]=useState(false);
    const[request,setRequest]=useState(false);
    const[equipment,setEquipment]=useState(false);

    const[labor,setLabor]=useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <>
    <PageLayout ToolbarName='User Landing' addButtonVisibility={true} onClickAdd={AddTask}>
        {/* <IonHeader>
            <IonToolbar slot='top'>
            <IonButtons slot="start">
                <IonButton onClick={()=>alert("clicked")}>Cancel</IonButton>
              </IonButtons>
            </IonToolbar>
        </IonHeader> */}
        
        <SpendStats/>
    <IonGrid>
    <IonRow >
      {/* <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
<IonCard className='ion-no-margin'   >
    <IonItem lines='none'>Task Pending</IonItem>
    <IonItem lines='none'>5</IonItem>
</IonCard>
   </IonCol> */}
   <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
   <IonCard className='ion-no-margin' >
   <IonItem lines='none'>Wallet Money</IonItem>
    <IonItem lines='none'>5000</IonItem>
    </IonCard>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
   <IonCard className='ion-no-margin' >
   <IonItem lines='none'>Assigned Equip</IonItem>
    <IonItem lines='none'>5</IonItem>
    </IonCard>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonCard className='ion-no-margin' >
   <IonItem lines='none'>Task Pending</IonItem>
    <IonItem lines='none'>10</IonItem>
    </IonCard>
        </IonCol>
        <IonCol className='justifycenter' size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
        <IonCard className='ion-no-margin' >
   <IonItem lines='none'>Task Completed</IonItem>
    <IonItem lines='none'>8</IonItem>
    </IonCard>
        </IonCol>
        </IonRow>
        </IonGrid>
      
        <IonAccordionGroup multiple={true}  expand="inset">
        <IonAccordion value="first">
        <IonItem slot="header" color="light">
            <IonLabel>Pending Task List</IonLabel>
        </IonItem>
        <IonCard slot='content'>
      <IonItem>
        <IonAvatar slot='start'><img src='https://ionicframework.com/docs/img/demos/avatar.svg' width={"50px"} height={"50px"}/></IonAvatar>
        <p>Kashiram Road should get Completed till buddha park!</p>
        </IonItem>
      </IonCard>
        </IonAccordion>



 
      {/* <IonCard>
      <IonItem>
        <IonAvatar slot='start'><img src='https://ionicframework.com/docs/img/demos/avatar.svg' width={"50px"} height={"50px"}/></IonAvatar>
        <p>Kashiram Road should get Completed till buddha park!</p>
        </IonItem>
      </IonCard>
      <IonCard>
      <IonItem>
        <IonAvatar slot='start'><img src='https://ionicframework.com/docs/img/demos/avatar.svg' width={"50px"} height={"50px"}/></IonAvatar>
        <p>Kashiram Road should get Completed till buddha park!</p>
        </IonItem>
      </IonCard> */}
</IonAccordionGroup>
<IonAccordionGroup expand="inset">
<IonAccordion value="second">
        <IonItem slot="header" color="light">
             <IonLabel>Completed Task</IonLabel>
        </IonItem>
        <IonCard slot='content'>
        <IonList>
      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption color="success" onClick={()=>alert("completed")} >
            <IonIcon slot="end" icon={trophy} size='large'></IonIcon>Completed</IonItemOption>
        </IonItemOptions>
      <IonItem lines='none'>
        <IonAvatar slot='start'><img src='https://ionicframework.com/docs/img/demos/avatar.svg' width={"50px"} height={"50px"}/></IonAvatar>
        <p>Kashiram Road should get Completed till buddha park!</p>
        </IonItem>
        <IonItemOptions side="start">
          <IonItemOption><IonIcon slot="start" icon={bug} size='large'></IonIcon>Issues</IonItemOption>
          <IonItemOption color="danger"><IonIcon slot="start" icon={close} size='large'></IonIcon>Cancel</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      </IonList>
      </IonCard>
      </IonAccordion>
      </IonAccordionGroup>
      <IonGrid>
    <IonRow className='ion-justify-content-center'>
      <IonCol  size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
      <IonButton expand='block' id="open-modal1" onClick={()=>setIsModalOpen(true)} >
          Input Expenditure
         </IonButton>
         </IonCol>
         <IonCol  size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
         <IonButton expand='block' id="open-modal2" onClick={()=>setRequest(true)}  >
           Request Demand
         </IonButton>
         </IonCol>
         <IonCol  size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
         <IonButton expand='block' id="open-modal3" onClick={()=>setEquipment(true)} >
           Enter Equipment
         </IonButton>
         </IonCol>
         <IonCol  size='12'sizeSm='6' sizeXs='6' sizeMd='6' sizeLg='3' sizeXl='3'>
         <IonButton expand='block' id="open-modal4" onClick={()=>setLabor(true)} >
        Labor Details 
         </IonButton>
        </IonCol>  
        </IonRow>
        </IonGrid>
        <IonCard>
            <IonCardTitle>Equipment Assigned</IonCardTitle>
        </IonCard>
  
        </PageLayout>
        {isModalOpen? <Modal ModalToolbarName='Expenditure'  isOpen={isModalOpen} onClose={closeModal}><InputExpenditure/></Modal>:null}
        {request? <Modal ModalToolbarName='request'  isOpen={request} onClose={closeModal}><InputExpenditure/></Modal>:null}
        {labor? <Modal ModalToolbarName='labor'  isOpen={isModalOpen} onClose={closeModal}><InputExpenditure/></Modal>:null}
        {equipment? <Modal ModalToolbarName='equipment'  isOpen={isModalOpen} onClose={closeModal}><InputExpenditure/></Modal>:null}
       
      </>
        )
}

export default UserLandingPage
