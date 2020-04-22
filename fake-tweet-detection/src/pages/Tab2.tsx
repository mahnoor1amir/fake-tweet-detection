import React from 'react';
import { IonContent, IonCardHeader, IonPage, IonTitle, IonCard,
   IonButton, IonIcon, IonCardTitle, IonCardContent } from '@ionic/react';
import { albumsOutline } from 'ionicons/icons';
import { DisplayResult } from '../components/output/DisplayResult';
import { VerifyAnother } from '../components/VerifyAnother';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent class='results' id='results' slot='fixed'>
        <DisplayResult></DisplayResult>
      </IonContent> 

      <IonContent class='again' id='again'> 
        <VerifyAnother></VerifyAnother>
      </IonContent>

    </IonPage>
  );
};

export default Tab2;
