import axios from 'axios'

const CUSTOMER = 'mamir'
const BASE_API_URL = 'http://localhost:8080'
const CUSTOMER_API_URL = `${BASE_API_URL}/data/${CUSTOMER}`


class AppDataService {
    
    retrieveAllImages(name) {
        return axios.get(`${CUSTOMER_API_URL}/images`);
    }

    sendImages(image){
        
        axios.post(`${CUSTOMER_API_URL}/images`, image)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
          
    }
    
}

export default new AppDataService()