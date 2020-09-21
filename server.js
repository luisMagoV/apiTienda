const express = require('express');
const bodyParser = require('body-parser');
const propiedades = require('./config/propiedades');
const tiendasRoutes = require('./tienda/tiendas.routes');
const db =  require('./config/database');
//init db
db();


const bodyParserJSON = bodyParser.json();
const bodyparserURLEncoded = bodyParser.urlencoded({extended: true})
const app = express();

app.use(bodyParserJSON);
app.use(bodyparserURLEncoded);

//init Routes
const router = express.Router();
app.use('/api', router);
tiendasRoutes(router);


app.listen(propiedades.PORT, () => console.log(`server is running on ${propiedades.PORT}`));