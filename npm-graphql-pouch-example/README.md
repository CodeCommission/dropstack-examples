# DROPSTACK GraphQL-Pouch example

[Live](https://yvwuzztp.dropstack.run/graphql)

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

## Deploy via [https://dropstack.run](https://dropstack.run)

```
dropstack deploy
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
