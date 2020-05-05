import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListImagesComponent from './ListImagesComponent';



class BackendApp extends Component {

    
      render() {
        return (
          <>
              
              <ListImagesComponent/>
            
          </>
        );
      }
}

export default BackendApp

