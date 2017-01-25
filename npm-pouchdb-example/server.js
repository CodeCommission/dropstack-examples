const SERVICE_PORT = process.env.SERVICE_PORT || 8080;
const express = require('express');
const uuid = require('uuid');
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const DefaultPouch = PouchDB.defaults({prefix: 'data/'});

const app = express();
const myPouch = new DefaultPouch('my-pouch-db');

app.use('/', require('express-pouchdb')(DefaultPouch, {logPath: 'data/log.txt'}));

const server = app.listen(SERVICE_PORT, () => console.log(`Listen on ${server.address().port}`));

myPouch.put({_id: uuid.v4(), data: 'Hello World!'});
