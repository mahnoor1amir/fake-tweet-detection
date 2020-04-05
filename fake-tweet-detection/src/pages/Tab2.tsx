import React from 'react';
import { IonContent, IonCardHeader, IonPage, IonTitle, IonCard,
   IonButton, IonIcon, IonCardTitle, IonCardContent } from '@ionic/react';
import { albumsOutline } from 'ionicons/icons';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>

        <IonCard>
          <IonIcon icon='checkmark-circle-outline'>Test</IonIcon>
          <IonCardHeader>
            <IonCardTitle></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
        
        <IonButton id='verify' color="secondary" shape="round" expand="full" > 
          Verify Another Tweet
          <IonIcon slot="end" icon={albumsOutline} ></IonIcon>
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
