module.exports = {
  search: search,
};

function search(ctx, args) {
  const database = require(process.cwd() + '/database.json');
  ctx.success(database.filter(x => x.title && x.title.toLowerCase().includes(args.term.trim().toLowerCase())));
}
