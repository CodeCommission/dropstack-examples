# DotNet Core 1.1 (F# + Suave) example

[Docker + F# Live Example](https://whwgikhc.cloud.dropstack.run)

## Run

```bash
dotnet restore
dotnet run
```

Use command line arguments to change ip/port

```bash
Usage:
    --ip ADDRESS   ip address (Default: 127.0.0.1)
    --port PORT    port (Default: 5000)
```

```bash
curl -s http://localhost:5000
curl -s http://localhost:5000/api | jq .
curl -s -XPOST http://localhost:5000/api | jq .
```

## Deploy via [https://dropstack.run](https://dropstack.run)

```bash
dropstack deploy
```

## Docker

```bash
docker build -t dotnet-fsharp-example .
docker run -it -p 8080:80 dotnet-fsharp-example
```
