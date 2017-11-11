const SYNC_FILE = process.env.SYNC_FILE;
const DROPSTACK_ACCESS_TOKEN = process.env.DROPSTACK_ACCESS_TOKEN;
const SERVICE_PORT = process.env.SERVICE_PORT;

const express = require('express');
const Dropbox = require('dropbox');

const todosRoutes = require('./routes/todos');
const TodosCatalog = require('./lib/todos-catalog');

const dropboxClient = new Dropbox({accessToken: DROPSTACK_ACCESS_TOKEN});
const app = express();

app.use(express.json());

dropboxClient
  .filesDownload({path: SYNC_FILE})
  .then(response => {
    // Create in memory store
    const todosCatalog = new TodosCatalog(JSON.parse(response.fileBinary));

    // Handle routes
    app.use('/todos', todosRoutes(todosCatalog));

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log(`Graceful shutdown. Syncing data to Dropbox.`);

      dropboxClient
        .filesUpload({
          path: SYNC_FILE,
          contents: JSON.stringify(todosCatalog.raw(), null, 2),
          mode: 'overwrite'
        })
        .then(response => {
          console.log(`Data synced to Dropbox. Exit.`);
          process.exit(0);
        })
        .catch(error => {
          console.error(error);
          process.exit(1);
        });
    });
  })
  .then(_ => app.listen(SERVICE_PORT, () => console.log(`Listen on ${SERVICE_PORT}`)))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
