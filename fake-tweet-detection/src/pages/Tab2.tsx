import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon,IonCard,IonItem,IonLabel, IonRouterOutlet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { albumsOutline, logoTwitter } from 'ionicons/icons';
import BackendApp from '../components/BackendApp';
import { Redirect, Route } from 'react-router-dom';
import Tab1 from './Tab1';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab2" />} exact={true} />
        </IonRouterOutlet>
      
      <IonContent>
        
      <div className="container">
        <BackendApp />
        
      </div>
      <div id="verifyAnother" >
      <IonButton id="verifyAnother" color="secondary" shape="round" expand="full" href="/tab1"> Verify Another Tweet
        <IonIcon slot="end" icon={albumsOutline}  ></IonIcon>
      </IonButton>
      </div>
      </IonContent>
     
      
    </IonPage>
  );
};

export default Tab2;
