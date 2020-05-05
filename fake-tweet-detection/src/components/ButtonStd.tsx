import React from 'react';
import './ButtonStd.css';
import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { star, cameraOutline, imageOutline } from 'ionicons/icons';
import { IonHeader, IonPage, IonTitle, IonToolbar, 
  IonFab, IonFabButton, IonGrid, IonRow, 
  IonCol, IonImg, IonActionSheet } from '@ionic/react';

export const ButtonStd: React.FC = () => (

  <IonContent>
 
    {/*-- Final --*/}
    <IonButton id="top_container" color="secondary" shape="round" expand="full"> Take Photo
        <IonIcon slot="end" icon={cameraOutline} ></IonIcon>
    </IonButton>
    <IonButton id="bottom"color="secondary" shape="round" expand="full"> Upload Photo
        <IonIcon slot="end" icon={imageOutline} ></IonIcon>
    </IonButton>
  </IonContent>
 
  
);
