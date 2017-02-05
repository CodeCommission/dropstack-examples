# Go example

[Docker + Go Live](https://sdygvymr.dropstack.run)

## Development

```bash
go build -o app/server .
./app/server
```

```bash
curl -s http://localhost:5000
```
## Deploy to [https://dropstack.run](https://dropstack.run)

```bash
npm i -g dropstack-cli
dropstack
```

## Docker

```bash
docker build -t go-example .
docker run -it -p 8080:80 go-example
```
