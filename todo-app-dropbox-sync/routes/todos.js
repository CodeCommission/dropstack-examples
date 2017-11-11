const express = require('express');
const uuid = require('node-uuid');

const router = express.Router();

module.exports = todosCatalog => {
  router.get('/', (req, res) => {
    res.send({data: todosCatalog.all()});
  });
  router.get('/:id', (req, res) => {
    res.send({data: todosCatalog.byId(req.params.id)});
  });
  router.post('/', (req, res) => {
    const newTodo = Object.assign({timestamp: new Date().toISOString(), id: uuid.v1()}, req.body);
    todosCatalog.upsert(newTodo);
    res.send(newTodo);
  });
  router.put('/:id', (req, res) => {
    todosCatalog.upsert(Object.assign(todos[req.params.id], req.body));
    res.send(todos[req.params.id]);
  });
  router.delete('/:id', (req, res) => {
    todosCatalog.remove(req.params.id);
    res.sendStatus(204);
  });
  return router;
};
