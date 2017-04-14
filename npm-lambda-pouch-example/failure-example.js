module.exports = (ctx, args, parent) => {
  const randomize = Math.floor((Math.random() * 10) + 1);

  if(randomize < 5) ctx.failure(new Error('A failure'));
  else ctx.success({ok: 'success'});
};
