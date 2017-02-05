# Go example

```bash
go build -o app/server .
./app/server
```

```bash
curl -s http://localhost:5000
```

## Docker

```bash
docker build -t go-example .
docker run -it -p 8080:80 go-example
```
