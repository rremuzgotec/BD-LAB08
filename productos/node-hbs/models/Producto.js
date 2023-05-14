var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductoSchema = new Schema({
    producto: {type: String, required: true, max: 20},
    marca: {type: String, required: true, max: 20},
    modelo: {type: String, required: true},
    estado: {type: String, required: true, max:2},
    created_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Producto', ProductoSchema);
