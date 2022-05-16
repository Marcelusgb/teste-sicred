import axios from 'axios';
import md5 from 'md5'



const publicKey = '4f8022ce06043ae4806d5b2405250a80';
const privateKey = '72a5e72f435d930360a827a86d259acbdebb0540';
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,

    }
});

export default api;
