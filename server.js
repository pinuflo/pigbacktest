const express = require('express');
const config = require('./libs/config/config.dev');
const connectToDb = require('./libs/db/connect')
const cors = require('cors');

const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const playerController = require('./controllers/PlayerController');

const app = express();

connectToDb();

const port = config.serverPort;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multipart());



//Rutas api 
app.use('/api/players', playerController);

//Index route
app.get('/', (req, res) => {
    res.send('Service');
});

app.listen(port, function() {
    console.log('Servidor corriendo - ', port);
});

