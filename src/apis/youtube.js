import axios from 'axios';
import https from 'https';

const KEY = 'AIzaSyB-HiomH431dhIZONNBALAysAdhi-Xcto0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
});