const db = require('../models/database');

const segmentosValidos = ['Tecnologia', 'Comércio', 'Indústria', 'Serviços', 'Agronegócio'];
const statusValidos = ['ativo', 'inativo'];

function validarDados(data) {
  const erros = [];
  if (!data.nomeEmpreendimento || data.nomeEmpreendimento.trim().length < 3) {
    erros.push("Nome do empreendimento inválido (mínimo 3 caracteres).");
  }
  if (!data.nomeResponsavel || data.nomeResponsavel.trim().length < 3) {
    erros.push("Nome do responsável inválido (mínimo 3 caracteres).");
  }
  if (!data.municipio) {
    erros.push("Município é obrigatório.");
  }
  if (!segmentosValidos.includes(data.segmento)) {
    erros.push(`Segmento inválido. Opções: ${segmentosValidos.join(', ')}.`);
  }
  if (!data.contato || !data.contato.includes('@')) {
    erros.push("Contato (e-mail) inválido.");
  }
  if (!statusValidos.includes(data.status)) {
    erros.push(`Status inválido. Opções: ${statusValidos.join(', ')}.`);
  }
  return erros;
}

module.exports = {
  listarTodos: (req, res) => res.status(200).json(db.getAll()),
  
  listarUm: (req, res) => {
    const item = db.getById(req.params.id);
    if (!item) return res.status(404).json({ erro: "Não encontrado." });
    res.status(200).json(item);
  },

  criar: (req, res) => {
    const erros = validarDados(req.body);
    if (erros.length > 0) return res.status(400).json({ erros });
    
    const novo = db.create(req.body);
    res.status(201).json(novo);
  },

  atualizar: (req, res) => {
    const existente = db.getById(req.params.id);
    if (!existente) return res.status(404).json({ erro: "Não encontrado." });

    const dadosAtualizados = { ...existente, ...req.body, id: req.params.id };
    const erros = validarDados(dadosAtualizados);
    if (erros.length > 0) return res.status(400).json({ erros });

    res.status(200).json(db.update(req.params.id, dadosAtualizados));
  },

  deletar: (req, res) => {
    if (!db.delete(req.params.id)) return res.status(404).json({ erro: "Não encontrado." });
    res.status(204).send();
  }
};