import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

const Tab3: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <IonList>

          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>Disabled Toggle</IonItemDivider>
          <IonItem><IonToggle disabled /></IonItem>

          <IonItem><IonToggle checked /></IonItem>

          <IonItem><IonToggle color="primary" /></IonItem>.

          <IonItem>
            <IonLabel>Pepperoni</IonLabel>
            <IonToggle value="pepperoni" />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" disabled={true} />
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;