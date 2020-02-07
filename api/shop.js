import Axios from 'axios'
import {apikey} from './config.json'

export default Axios.create({
    baseURL: 'https://api2.shop.com/AffiliatePublisherNetwork/v2',
    headers: {
        Accept: "application/json",
        Api_key: apikey
    }
})
