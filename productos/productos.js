conn = new Mongo();
db = conn.getDB("producto");

db.productos.insert(
  [
   {producto: 'Impresora', marca: 'Epson', modelo: 'L375', estado:'Nuevo', created_at: new Date('01/23/2020')}
 ]);
