# Lambda-Pouch example

## Live Examples

* [Basic output](https://momnhgvw.services.dropstack.run/example)
* [Randomized output](https://momnhgvw.services.dropstack.run/randomize-example)
* [Randomized failure](https://momnhgvw.services.dropstack.run/failure-example)

## Run

```bash
npm install
npm start
```

[http://localhost:3000/example](http://localhost:3000/example)

## Register a lambda function

```bash
npm run start -- --function example.js
```

## Register example functions

```bash
npm run register
```

## Deploy via [https://dropstack.run](https://dropstack.run)

```
dropstack deploy
```