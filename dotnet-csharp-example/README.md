# DotNet Core 1.1 (C# + Kestrel) example

## Run

```bash
dotnet restore
dotnet run
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
docker build -t dotnet-csharp-example .
docker run -it -p 8080:80 dotnet-csharp-example
```
