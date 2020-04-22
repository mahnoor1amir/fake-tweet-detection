import React, { useState } from 'react';
import { IonPopover, IonButton, IonIcon, IonContent } from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';
import './HelpPopover.css';

export const HelpPopover: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <IonPopover
        isOpen={showPopover}
        onDidDismiss={e => setShowPopover(false)}>
             
        <p>Help info whatever whe decide to put in offically</p>
      </IonPopover>
      
      <IonButton shape='round' size="large" class='helpPop' color='secondary' onClick={() => setShowPopover(true)} >
        <IonIcon icon={ helpCircleOutline } size="large" ></IonIcon>
      </IonButton>
    </>
  );
};
