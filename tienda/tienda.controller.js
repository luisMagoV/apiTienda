const Tienda = require('./tienda.dao');

exports.createTienda = (req, res, next) =>{
    const tienda ={
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        ubicacion: req.body.ubicaion,
        imagen: req.body.imagen,
    };

    Tienda.create(tienda, (err, res)=>{
      if (err) res.json({error: err});
      res.json({message: 'Tienda creada Satisfactoriamemnte'});
    })

}


exports.getTiendas = ( req, res ) =>{
    Tienda.get({}, (err, tienda) =>{
        if(err) res.json({error: err});
        res.json({Tienda: tienda});
    });


}

