const SERVICE_PORT = process.env.SERVICE_PORT || 3000;
const ENVIRONMENT = 'default';
const ENABLE_RELAY = false;

const fs = require('fs');
const path = require('path');
const express = require('express');
const expressMorgan = require('morgan');
const expressCors = require('cors');
const expressBodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const graphqlPouch = require('graphql-pouch');
const myFunctions = require('./blog-functions');

const schemaDefinition = fs.readFileSync(path.join(__dirname, 'blog.graphql')).toString();
const defaultSchema = graphqlPouch.schema(ENVIRONMENT, schemaDefinition, ENABLE_RELAY, myFunctions);

const app = express();
app.disable('x-powered-by');
app.use(expressCors());
app.use(expressMorgan('dev'));
app.use(expressBodyParser.json());

app.use('/graphql', expressGraphQL({
  schema: defaultSchema.schema,
  context: {environment: 'default'},
  pretty: true,
  graphiql: true,
}));

const server = app.listen(SERVICE_PORT, () => console.log(`
GraphQL server listen on port ${server.address().port}
GraphiQL - http://127.0.0.1:${server.address().port}/graphql
`));
