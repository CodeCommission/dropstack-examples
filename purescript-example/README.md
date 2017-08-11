# PureScript/Pux SPA example

[![Deploy to dropstack](https://deploy.cloud.dropstack.run/button.svg)](https://deploy.cloud.dropstack.run?repo=https://github.com/CodeCommission/dropstack-examples/tree/master/purescript-example)

## Live

[Elm SPA example](https://purescript-example.cloud.dropstack.run)

## SPA configuration

To "inject" custom configurations via environment variables enter variables into your `dropstack deploy` and include the generated `config.js` into your app or `index.html`.

```bash
dropstack deploy -v API_KEY=yourkey -v API_URL=http://myapi.example.com -v CONFIG_VARS="API_URL API_KEY"
```

For local development the [`config.js`](https://elm-example.cloud.dropstack.run/config.js) looks like:

```javascript
window.__env = {"API_KEY":"yourkey","API_URL":"http://myapi.example.com"}
```
