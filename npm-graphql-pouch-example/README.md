# DROPSTACK GraphQL-Pouch example

## Run

```bash
$ npm install
$ npm start
```

## Dev

```bash
$ npm install
$ npm run dev
```

## GraphQL query

* [GraphiQL - http://localhost:3000/graphql](http://localhost:3000/graphql)

```graphql
{
  search(term: "title ") {
    title
    id
  }
}
```
