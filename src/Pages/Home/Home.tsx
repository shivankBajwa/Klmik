import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonItemDivider, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../../Layout/Tab/Tab';
import './Home.css';
import PageLayout from '../../Layout/PageLayout/PageLayout';
import { add } from 'ionicons/icons';
import { Redirect } from 'react-router';
const Home: React.FC = () => {
const router=useIonRouter();
const AddNewProject=()=>{
router.push(
  '/addProject','root'
)
}

  const dumpyCardData=[{
    projectName:"Moradabad",
    status:"ok",
    assigned:"Jonny",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },
  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  },  {
    projectName:"Amroha",
    status:"ok",
    assigned:"Nishant",
    createdAt:"24/07/2023",
    deadline:"24/12/2023",
    expenditure:"700000",
  }];

  return (
    <>

  <PageLayout>
<IonHeader>
    <IonToolbar>
    
      <IonTitle color={'success'}>Kl_Mik</IonTitle>
    </IonToolbar>
  </IonHeader>
  
      {dumpyCardData.map((item,index)=>{
      return(
          <IonCard key={index}>
      <IonCardHeader >
        <IonCardTitle>{item.projectName}</IonCardTitle>
        <IonCardSubtitle>Assigned to: {item.assigned}</IonCardSubtitle>
      </IonCardHeader>
  
    <div style={{height:"5px",background:"red",margin:"0px",padding:"0px"}}><hr/></div>
      <IonCardContent>Created at :{item.assigned} <br/>Due Date : {item.deadline} <br/>Total Expenditure :{item.expenditure} </IonCardContent>
    </IonCard>
    
      )
    
      })}
      
            <IonCard className='addCard' color={"light"} >
            <IonButton onClick={AddNewProject} type="button">
            <IonIcon icon={add} size="large"></IonIcon>
            </IonButton>
    </IonCard>
  
      </PageLayout>
      </>
  );
};

export default Home;
