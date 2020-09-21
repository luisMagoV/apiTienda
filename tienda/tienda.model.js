const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiendaSchema = new Schema({
    nombre :{
        type: String,
        required: true

    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    }

},   {
    timestamps: true
}
);

module.exports = tiendaSchema;
