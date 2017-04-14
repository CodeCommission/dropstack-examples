module.exports = (ctx, args, parent) => {
  const randomize  = Math.floor((Math.random() * 10) + 1);
  ctx.success({
    ok: randomize < 5,
  });
};
