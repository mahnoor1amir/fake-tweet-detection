//UNFINISHED -- at example phase
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, 
IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, 
IonButton, IonToggle } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

export const DisplayResult: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
    <IonContent>
      <IonCard class='DisplayNameCardTrueFalse'  >
        <IonItem>
          <IonLabel>The Tweet's Displayname is ... {JSON.stringify(checked)} </IonLabel>
          <IonIcon icon={checkmarkCircleOutline} slot="start" size='large' hidden={!checked}/>
          <IonIcon icon={closeCircleOutline} slot="start" size='large' hidden={checked} />
        </IonItem>

        <IonCardContent>
          This is where the image of the uploaded tweet will display
          <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
        </IonCardContent>
      </IonCard>

      <IonCard class='UserNameCardTrueFalse'>
        <IonItem>
          <IonLabel>The Tweet's Username is ... {JSON.stringify(checked)}</IonLabel>
          <IonIcon icon={checkmarkCircleOutline} slot="start" size='large' hidden={!checked} />
          <IonIcon icon={closeCircleOutline} slot="start" size='large' hidden={checked}/>
        </IonItem>

        <IonCardContent>
          This is where the image of the uploaded tweet will display
        </IonCardContent>
      </IonCard>

      <IonCard class='ContentCardTrueFalse'>
        <IonItem>
          <IonLabel>The Tweet Content is ... {JSON.stringify(checked)}</IonLabel>
          <IonIcon icon={checkmarkCircleOutline} slot="start" size='large' hidden={!checked}/>
          <IonIcon icon={closeCircleOutline} slot="start" size='large' hidden={checked} />
        </IonItem>

        <IonCardContent>
          This is where the image of the uploaded tweet will display        
        </IonCardContent>
      </IonCard>

      <IonCard class='TimestampCardTrueFalse'>
        <IonItem>
          <IonLabel>The Tweet's Timestamp is ... {JSON.stringify(checked)}</IonLabel>
          <IonIcon icon={checkmarkCircleOutline} slot="start" size='large' hidden={!checked} />
           <IonIcon icon={closeCircleOutline} slot="start" size='large' hidden={checked} />
        </IonItem>

        <IonCardContent>
          This is where the image of the uploaded tweet will display 
        </IonCardContent>
      </IonCard>

    </IonContent>

  </>
  );
};


//<IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
//<IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />