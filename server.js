<<<<<<< HEAD
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use('/comprovantes', express.static(path.join(__dirname, 'comprovantes')));

// Configura a pasta de arquivos estáticos (imagens, CSS, JS)
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// API rotas
app.use('/api/gerar-comprovante', require('./api/gerar-comprovante'));

// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
=======
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Configura a pasta de arquivos estáticos (imagens, CSS, JS)
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// API rotas
app.use('/api/gerar-comprovante', require('./api/gerar-comprovante'));

// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
>>>>>>> b9bb266cbb7ef5d6e545af6b0d27359373f2e023
