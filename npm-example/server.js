const express = require('express');
const app = express();

app.get('/', (req, res, next) => res.send({message: '(GET/TEXT) DROPSTACK NodeJS Example'}));

const server = app.listen(80, () => console.log(`Listen on ${server.address().port}`));
