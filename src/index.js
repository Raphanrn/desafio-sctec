const express = require('express');
const roteador = require('./routes/empreendimentos');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/empreendimentos', roteador);

app.get('/', (req, res) => {
  res.send('API de Empreendimentos SC está rodando! Acesse /api/empreendimentos');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});