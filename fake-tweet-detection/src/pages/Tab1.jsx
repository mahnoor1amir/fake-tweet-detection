import React, {useState, Component} from 'react';
import { IonContent, IonRouterOutlet, IonHeader, IonPage, IonTitle, IonButton, IonIcon} from '@ionic/react';

import { logoTwitter, cameraOutline, imageOutline, checkmarkDoneOutline, earthOutline } from 'ionicons/icons';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import Tab2 from './Tab2';
import './Tab1.css';

import hocify from '../hooks/hocify.js';
import usePhotoGallery from '../hooks/usePhotoGallery';
import TakePhotoClass from '../components/TakePhotoClass';

const CUSTOMER = 'mamir'
const BASE_API_URL = 'http://localhost:8080'
const CUSTOMER_API_URL = `${BASE_API_URL}/data/${CUSTOMER}`
const SEND_API_URL = `${CUSTOMER_API_URL}/images/`

const withPhotoGallery = hocify(usePhotoGallery);


class Tab1 extends Component{

  constructor(props) {
    super(props)

  }
  state = {
    title: 'default',
    content: '',
    image: null,
    photoTaken: false,
    submit: true,
    photos: null
  };
  
  componentDidUpdate(prevProps) {
      if (this.props.photos !== prevProps.photos) {
        this.setState({
          image:this.props.photos[0],
          photoTaken: true
        })
      }
    }
    componentDidMount() {
      this.setState({
        photoTaken: false
      })
      //this.handleImageChange();
    }
 

  handleChange = (e) => {
    if(this.state.photoTaken){
      console.log(this.state.image);
    } else{
      this.setState({
        [e.target.id]: e.target.value
      });
    }
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
    const {photos, takePhoto} = this.props;
    debugger;
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

      <IonButton onClick={() => takePhoto()}id="top_container" color="secondary" shape="round" expand="full" >  Take Photo
      
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
export default withPhotoGallery(Tab1);


//<TakePhotoClass  handlePhotoChange = {this.handlePhotoChange}/>