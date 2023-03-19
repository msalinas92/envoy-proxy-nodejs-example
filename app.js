const express = require('express');
const app = express();
const port = 3010;

app.get('/', (req, res) => {
  res.send('Hola desde Express.js');
});

app.listen(port, () => {
  console.log(`API de Express escuchando en el puerto ${port}`);
});
