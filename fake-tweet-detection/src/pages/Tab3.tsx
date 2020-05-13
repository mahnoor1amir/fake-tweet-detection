import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonIcon } from '@ionic/react';
import './Tab3.css';
import { logoTwitter, cameraOutline, imageOutline } from 'ionicons/icons';

//let takePhoto = p => (usePhotoGallery(), null)
// function getPhotoFunction() {
//   let {photos,takePhoto} = usePhotoGallery()
//   takePhoto()
//   return photos
// }

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          
        </IonHeader>

      </IonContent>
      <IonButton id="top_container" color="secondary" shape="round" expand="full" > Take Photo 
      
               <IonIcon slot="end" icon={cameraOutline} ></IonIcon>
        </IonButton>
    </IonPage>
  );
};

export default Tab3;

//      <IonButton id="top_container" color="secondary" shape="round" expand="full" onClick={() => takePhoto()}> Take Photo 
// const { photos, takePhoto } = usePhotoGallery();
// const [photoToDelete, setPhotoToDelete] = useState<Photo>();