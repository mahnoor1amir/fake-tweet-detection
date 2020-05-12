import React, {useState, Component} from 'react';
import { IonContent, IonRouterOutlet, IonHeader, IonPage, IonTitle, IonButton, IonIcon} from '@ionic/react';

import { logoTwitter, cameraOutline, imageOutline, checkmarkDoneOutline, earthOutline } from 'ionicons/icons';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import Tab2 from './Tab2';
import './Tab1.css';

import hocify from '../hooks/hocify.js';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import TakePhotoClass from '../components/TakePhotoClass';

const CUSTOMER = 'mamir'
const BASE_API_URL = 'http://localhost:8080'
const CUSTOMER_API_URL = `${BASE_API_URL}/data/${CUSTOMER}`
const SEND_API_URL = `${CUSTOMER_API_URL}/images/`



class Tab1 extends Component{

  state = {
    title: 'default',
    content: '',
    image: null,
    submit: true
  };
  

  handleChange = (e) => {
    // const { takePhoto, photos } = usePhotoGallery();
    // photos= takePhoto();
    this.setState({
      [e.target.id]: e.target.value
    })
    this.setState(prevState => ({
      submit: !prevState.submit
    }));
    
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    
    let image=this.state.image;
    formData.append("file",image);
    let url = SEND_API_URL;
    
    axios.post(url, formData,{
      headers: {
        'content-type': 'multipart/form-data'
        }}
      )
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))        
  };
  render() {
    return(
    <IonPage>
     <IonRouterOutlet>
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
      <IonContent >
      
          <IonTitle id="fake" size="large">FAKE</IonTitle>
          <IonTitle id="tweet" size="large">TWEET</IonTitle>
          <IonTitle id="detection" size="large">DETECTION</IonTitle>
          <IonTitle id="app" size="large">APP</IonTitle>
          
     
      </IonContent>
      <div id="twitter-logo">
          <IonIcon  size="large" icon={logoTwitter} color="secondary"  />
          </div>
      <IonButton id="top_container" color="secondary" shape="round" expand="full" >  
      <TakePhotoClass />
               <IonIcon slot="end" icon={cameraOutline} ></IonIcon>
        </IonButton>
        <IonButton id="bottom"color="secondary" shape="round" expand="full" href="/tab2"> 
        
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          
          <IonIcon slot="end" icon={imageOutline} ></IonIcon>
        </IonButton>
        <IonButton id="top_container" color="secondary" shape="round" expand="full"  onClick = {this.handleSubmit} href="/tab2"> Submit 
               <IonIcon slot="end" icon={earthOutline} ></IonIcon>
        </IonButton>
        <IonButton id="top_container" color="secondary" shape="round" expand="full"   href="/tab2"> See Results 
               <IonIcon slot="end" icon={checkmarkDoneOutline} ></IonIcon>
        </IonButton>

    </IonPage>
  );
    }
}
export default Tab1;

        // AppDataService.sendImages(CUSTOMER)//HARDCODED
        //     .then(
        //         response => {
        //             console.log(response);
                    
        //         }
        //     )
////<ButtonStd></ButtonStd>
//      <TitleCard></TitleCard>
//<ExploreContainer name="Fake Tweet Detection App" />
{/* <IonTitle size="large" color="blue">Fake Tweet Detection 
        <IonIcon  size="large" icon={ logoTwitter }></IonIcon>
      </IonTitle> */}
      

      //  const { takePhoto, photos } = usePhotoGallery();;
      //      <IonButton id="top_container" color="secondary" shape="round" expand="full" onClick={() => takePhoto()}> Take Photo          <IonIcon slot="end" icon={cameraOutline} ></IonIcon>



      // handleSubmit = (e) => {
      //   e.preventDefault();
      //   console.log(this.state);
      //   let form_data = new FormData();
      //   form_data.append('image', this.state.image, this.state.image.name);
      //   form_data.append('title', this.state.title);
      //   form_data.append('content', this.state.content);
      //   let url = SEND_API_URL;
      //   axios.post(url, form_data, {
      //     headers: {
      //       'content-type': 'multipart/form-data'
      //     }
      //   })
      //       .then(res => {
      //         console.log(res.data);
      //       })
      //       .catch(err => console.log(err))
      // };

      // , {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // }
