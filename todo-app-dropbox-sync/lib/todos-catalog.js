module.exports = function TodosCatalog(todos = {}) {
  this.raw = () => todos;
  this.all = () => Object.values(todos);
  this.byId = id => todos[id];
  this.upsert = todo => (todos[todo.id] = todo);
  this.remove = id => delete todos[id];
};
