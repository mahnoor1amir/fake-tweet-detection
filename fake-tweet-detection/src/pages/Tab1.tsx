import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonItem, IonLabel, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { ButtonExample } from '../components/ButtonExample';
import { ButtonStd } from '../components/ButtonStd';
import { TitleCard } from '../components/TitleCard';
import { logoTwitter } from 'ionicons/icons';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
     
      <IonContent>
      <IonHeader>
          <IonTitle size="large">FAKE</IonTitle>
          <IonTitle size="large">TWEET</IonTitle>
          <IonTitle size="large">DETECTION</IonTitle>
          <IonTitle size="large">APP</IonTitle>
          <IonIcon size="large" icon={logoTwitter} color="secondary"  />
      </IonHeader>
      <IonCard>
          <IonItem>
            <IonIcon size="large" icon={logoTwitter} color="secondary" slot="end" />
            <IonLabel>Fake Tweet Detection</IonLabel>
          </IonItem>
        </IonCard>
      

        <IonHeader collapse="condense">
          
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      </IonContent>
      <IonContent><ButtonStd></ButtonStd></IonContent>
    </IonPage>
  );
};

export default Tab1;

//      <TitleCard></TitleCard>
//<ExploreContainer name="Fake Tweet Detection App" />
{/* <IonTitle size="large" color="blue">Fake Tweet Detection 
        <IonIcon  size="large" icon={ logoTwitter }></IonIcon>
      </IonTitle> */}