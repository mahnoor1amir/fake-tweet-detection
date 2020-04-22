//UNFINISHED -- at example phase
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { logoTwitter, pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const UsernameCard: React.FC = () => {
  return (
    
      <IonContent>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Username</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
            <IonIcon icon={"checkmark-circle-outline"} slot="start"></IonIcon>
            </IonItem>
            something something words words words 
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
          <IonIcon icon={"close-circle-outline"} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
          </IonCardContent>
        </IonCard>

      </IonContent>
  );
};