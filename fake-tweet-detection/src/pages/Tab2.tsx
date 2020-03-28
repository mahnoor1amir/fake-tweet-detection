import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { albumsOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton color="secondary" shape="round" expand="full"> Verify Another Tweet
        <IonIcon slot="end" icon={albumsOutline} ></IonIcon>
      </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
