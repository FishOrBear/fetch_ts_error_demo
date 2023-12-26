import { HttpsProxyAgent } from 'https-proxy-agent';
import fetch2 from 'node-fetch';

//construct proxy URL
const proxyUrl = `http://localhost:10809`;
//create proxy agent
const proxyAgent = new HttpsProxyAgent(proxyUrl);

//make request using random proxy from array
const response = await fetch2("https://www.google.com", { agent: proxyAgent });


console.log('response: ', await response.text());

let res = await fetch2("https://api.64clouds.com/v1/", { agent: proxyAgent });
let data = await res.json();
