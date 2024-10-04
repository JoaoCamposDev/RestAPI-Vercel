// Obriga o aplicativo a utilizar o express para realizar requisições
const express    =     require('express');
const config     =     require('config');
const cors = require('cors');


module.exports = () => {
    const app = express();
    app.use(express.json());
    app.set('port', process.env.PORT || config.get('server.port'));
    app.use(cors());
    return app;
};