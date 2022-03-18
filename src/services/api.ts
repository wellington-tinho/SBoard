import axios from 'axios';
 
var API
if (process.env.NODE_ENV !== 'production') {
   API = ('http://127.0.0.1:5000/')
  
} else {
   API = ('https://sboard-api.herokuapp.com/')
  
}

export const api = axios.create({
  baseURL: API,
  
})

