# Go example

[Docker + Go Live Example](https://bwrbytxq.cloud.dropstack.run)

## Development

```bash
go build -o app/server .
./app/server
```

```bash
curl -s http://localhost:5000
```

## Deploy via [https://dropstack.run](https://dropstack.run)

```bash
dropstack deploy
```

## Docker

```bash
docker build -t go-example .
docker run -it -p 8080:80 go-example
```
