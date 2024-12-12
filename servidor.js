const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'userapp',
  password: 'mypassword',
  database: 'BancoDB'
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa!');

  // Consultas a la base de datos
  obtenerCuentas();
  obtenerClientes();
  obtenerCuentasConClientes();
  obtenerClientesSinCuentas();
});

// Función para obtener todas las cuentas
function obtenerCuentas() {
  const query = 'SELECT * FROM cuentas';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener las cuentas:', err);
      return;
    }
    console.log('\nListado de todas las cuentas:');
    console.table(results);
  });
}

// Función para obtener todos los clientes
function obtenerClientes() {
  const query = 'SELECT * FROM clientes';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los clientes:', err);
      return;
    }
    console.log('\nListado de todos los clientes:');
    console.table(results);
  });
}

// Función para obtener las cuentas asociadas a clientes
function obtenerCuentasConClientes() {
  const query = `
    SELECT c.nombre, cu.tipo_cuenta, cu.saldo
    FROM cuentas cu
    JOIN clientes c ON cu.id_cliente = c.id_cliente
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener las cuentas con clientes:', err);
      return;
    }
    console.log('\nListado de cuentas asociadas a clientes:');
    console.table(results);
  });
}

// Función para obtener los clientes sin cuentas asociadas
function obtenerClientesSinCuentas() {
  const query = `
    SELECT c.nombre
    FROM clientes c
    LEFT JOIN cuentas cu ON c.id_cliente = cu.id_cliente
    WHERE cu.id_cliente IS NULL
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los clientes sin cuentas:', err);
      return;
    }
    console.log('\nListado de clientes sin cuentas asociadas:');
    console.table(results);
  });
}