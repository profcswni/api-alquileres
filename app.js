//Crear un servidor con Express
const express = require('express');
//Incluir el archivo de conexion a la base de datos
const connection = require('./conexion');

//Crear una instancia de Express
const app = express();

//Usar el puerto 3000
const port = 3000;

//Crear una ruta para el servidor web
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

//Ruta para extraer los vehiculos
app.get('/vehiculos', (req, res) => {
    //Extraer los vehiculos de la base de datos
    
    connection.query('SELECT * FROM vehiculos', (err, rows) => {
        if(err) throw err;
        //Convertir el resultado a JSON
        res.json(rows);
    });
    
});

//Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor funcionando');
});