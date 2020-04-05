import React, { useState } from 'react';
import './ButtonStd.css';
import { IonButton, IonIcon, IonContent, IonActionSheet} from '@ionic/react';
import { star, cameraOutline, imageOutline, close } from 'ionicons/icons';

export const ButtonStd: React.FC = () => {

  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonContent>
      <IonButton shape='round' onClick={() => setShowActionSheet(true)} expand="block" color='secondary' >
        Verify Tweet
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          text: 'Take a picture',
          role: 'destructive',
          icon: cameraOutline,
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Upload Tweet',
          icon: star,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
    </IonContent>

  );

}












































