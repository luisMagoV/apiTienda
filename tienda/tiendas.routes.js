const Tienda  = require('./tienda.controller');

module.exports = (router) =>{
    router.post('/add', Tienda.createTienda);
    router.get('/tiendas', Tienda.getTiendas);
}
