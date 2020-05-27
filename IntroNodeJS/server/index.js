// importar express
const express = require('express');
//configurar express
const app = express();
app.use('/', (req, res) => {
    //res.send('Hola Mundo en NodeJs');
    console.log(req);
});

app.listen(3000);



