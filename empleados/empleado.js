conn = new Mongo();
db = conn.getDB("empleado");


db.empleados.insert(
  [
   {nombre: 'Miguel', apellido: 'Lujan', email: 'm.lujan@gmail.com', telefono:'969854744', departamento:'Sistemas', created_at: new Date('01/23/2020')}
 ]);
