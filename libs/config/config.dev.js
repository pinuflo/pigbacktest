const path = require('path');

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'mongo';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'app-db';
config.serverPort = process.env.serverPort || 3000;

//datos momentaneos
config.secret = 'supersecret';
config.database_url_dev = 'mongodb://localhost:27017/octano';


module.exports = config;
