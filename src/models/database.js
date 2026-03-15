const crypto = require('crypto');

let empreendimentos = [
  {
    id: crypto.randomUUID(),
    nomeEmpreendimento: "Tech Solutions SC",
    nomeResponsavel: "João Silva",
    municipio: "Florianópolis",
    segmento: "Tecnologia",
    contato: "joao@techsolutions.com.br",
    status: "ativo"
  },
  {
    id: crypto.randomUUID(),
    nomeEmpreendimento: "Mercado do Vale",
    nomeResponsavel: "Maria Oliveira",
    municipio: "Blumenau",
    segmento: "Comércio",
    contato: "maria@mercadodovale.com.br",
    status: "ativo"
  }
];

module.exports = {
  getAll: () => empreendimentos,
  getById: (id) => empreendimentos.find(e => e.id === id),
  create: (data) => {
    const novo = { id: crypto.randomUUID(), ...data };
    empreendimentos.push(novo);
    return novo;
  },
  update: (id, data) => {
    const index = empreendimentos.findIndex(e => e.id === id);
    if (index === -1) return null;
    empreendimentos[index] = { id, ...data };
    return empreendimentos[index];
  },
  delete: (id) => {
    const index = empreendimentos.findIndex(e => e.id === id);
    if (index === -1) return false;
    empreendimentos.splice(index, 1);
    return true;
  }
};