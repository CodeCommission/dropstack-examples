const express = require("express");
const app = express();
const SERVICE_PORT = process.env.SERVICE_PORT || 3000;

app.get("/", (req, res, next) =>
  res.send({ message: "(GET/TEXT) DROPSTACK NodeJS Example" })
);

const server = app.listen(SERVICE_PORT, () =>
  console.log(`Listen on ${server.address().port}`)
);
