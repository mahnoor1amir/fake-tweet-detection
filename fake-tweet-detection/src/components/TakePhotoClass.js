import React from 'react';
import hocify from '../hooks/hocify';
import usePhotoGallery from '../hooks/usePhotoGallery';
import {IonButton} from '@ionic/react';

const withPhotoGallery = hocify(usePhotoGallery);

class TakePhotoClass extends React.Component {


  render() {
    const { photos, takePhoto} = this.props;
    return <IonButton  onClick={() => takePhoto()}  >TAKE PHOTO </IonButton>;
  
  }
}

export default withPhotoGallery(TakePhotoClass);