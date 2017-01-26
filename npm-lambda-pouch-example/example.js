module.exports = (ctx, args, parent) => {
  ctx.success({
    args: args,
    context: ctx.context,
    msg: 'Hello World!',
  });
};
