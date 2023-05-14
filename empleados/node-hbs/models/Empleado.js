var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmpleadosSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    email: {type: String, required: true},
    telefono: {type: String, required: true, max:2},
    departamento: {type: String, required: true},
    created_at: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Empleado', EmpleadosSchema);
