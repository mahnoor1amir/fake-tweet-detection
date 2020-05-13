import React, { Component } from 'react';
import AppDataService from '../service/AppDataService';
import { IonIcon } from '@ionic/react';
import { checkmarkCircle, closeCircle } from 'ionicons/icons';
import "./ListImagesComponent.css";

const CUSTOMER = 'mamir'
// 1 content 2 handle 3 timestamp
class ListImagesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            message: null
        }
        this.refreshImages = this.refreshImages.bind(this)
    }

    componentDidMount() {
        this.refreshImages();
    }

    refreshImages() {
        AppDataService.retrieveAllImages(CUSTOMER)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ 
                        images: response.data,
                        content: false,
                        handle: false,
                        timestamp: false,
                    })

                }
            )
    }
    WhichIcon(props) {
        const isValid= props.isValid;
        if (isValid) {
            return <IonIcon size="large" icon={checkmarkCircle} color="secondary" slot="end" />
        }
        return <IonIcon size="large" icon={closeCircle} color="secondary" slot="end" />
      }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Validity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.images.map(
                                    image =>
                                        <tr key={image.id}>
                                            <td>{image.field} </td>
                                            <this.WhichIcon isValid={image.validity} />
                                        </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}

export default ListImagesComponent

        // AppDataService.sendImages(CUSTOMER)//HARDCODED
        //     .then(
        //         response => {
        //             console.log(response);
                    
        //         }
        //     )