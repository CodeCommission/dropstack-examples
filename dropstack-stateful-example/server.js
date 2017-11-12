const SERVICE_PORT = process.env.SERVICE_PORT || 8080;
const fse = require("fs-extra");
const path = require("path");
const express = require("express");
const app = express();

app.get("/files", (req, res) => {
  fse.readdir(path.resolve("/mnt")).then(data => res.send(data));
});

app.listen(SERVICE_PORT, () => console.log(`Listen on ${SERVICE_PORT}`));

let count = 0;
setInterval(() => {
  count++;
  fse.writeFile(
    path.resolve(`/mnt/file-${count}-${new Date().toISOString()}.json`),
    JSON.stringify({ id: count })
  );
}, 60000);
