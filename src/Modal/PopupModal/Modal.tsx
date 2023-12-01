import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react'
interface ModalDetails {
    ModalToolbarName: string,
    onClose: () => void,
    isOpen: boolean,
    children: React.ReactNode,
  }
  
  const Modal = ({ isOpen, ModalToolbarName, onClose, children }: ModalDetails) => {
    const modalRef = useRef<HTMLIonModalElement>(null);
    // const modalRef = useRef<HTMLIonModalElement>(null);

    // useEffect(() => {
    //   const handleOutsideClick = (event: MouseEvent) => {
    //     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //       close();
    //     }
    //   };
//   const [state,setState]=useState(34ezx);
    //   window.addEventListener('click', handleOutsideClick);
  
    //   return () => {
    //     window.removeEventListener('click', handleOutsideClick);
    //   };
    // }, [close]);
    // const handleDiss=()=>{
    //     debugger;
    //     console.log("hi guys")
    //   setState(true);
    //     console.log("hi guys")
    // }
    return (
      <IonModal  ref={modalRef} isOpen={isOpen} onDidDismiss={onClose} initialBreakpoint={0.75} breakpoints={[0, 0.5, 0.75, 1]}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{ModalToolbarName}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={onClose}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="">
          {children}
        </IonContent>
      </IonModal>
    );
  };
        
export default Modal
