const express = require('express');
const cors = require('cors');
const controller = require('./controller')
const app = express();
app.use(express.json);
app.use(cors());

//const ctrl = require('./controller') a different way to write it whats at the bottom

const {
    getAllHouses,
    deleteHouse, 
    createHouse, 
    updateHouse
} = require('./controller')
// a perfect example of destructering above 

app.get(`/api/houses`, getAllHouses)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)
app.delete(`/api/houses/:id`, deleteHouse)
// get all houses had to be renamed

const baseURL = 'http://localhost:4004/api/houses'
 app.get(`${baseURL}/api/houses`, (req, res) => {
 console.log('hello this is the api houses endpoint')
});

const port = 4004;
app.listen(port, ()=> console.log(`We are on port ${port}`))
