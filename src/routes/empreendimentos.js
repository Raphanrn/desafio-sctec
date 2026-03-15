const express = require('express');
const router = express.Router();
const controller = require('../controllers/empreendimentosController');

router.get('/', controller.listarTodos);
router.get('/:id', controller.listarUm);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

module.exports = router;