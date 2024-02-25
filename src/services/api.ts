import axios from 'axios';
 
var API
if (process.env.NODE_ENV !== 'production') {
   API = ('http://127.0.0.1:5000/')
  
} else {
   API = ('https://sboard-api.onrender.com/')
  
}

export const api = axios.create({
  baseURL: API,
})

api.get('/')
.then(response => console.info(response.data))
.catch((err) => console.warn('Não foi possivel se conectar com a API, \n\n',err)
)

