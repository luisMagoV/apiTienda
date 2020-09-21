const mongoose = require('mongoose');

const tiendaSchema  = require('./tienda.model');


tiendaSchema.statics = {
    create: function(data, cb){
        const tienda = new this(data);
        tienda.save(cb);

    },
    get: function(query, cb){
        this.find(query, cb);
    },

}

const tiendaModel = mongoose.model('tienda', tiendaSchema);
module.exports = tiendaModel;