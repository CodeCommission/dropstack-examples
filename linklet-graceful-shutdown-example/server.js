process.on("SIGINT", () => {
  console.log("Graceful shutdown ...");
  process.exit(0);
});

setInterval(() => {
  console.log("Do something every 20 seconds ...");
}, 20000);
