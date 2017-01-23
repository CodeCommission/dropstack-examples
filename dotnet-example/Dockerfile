FROM microsoft/dotnet:latest
WORKDIR /src
ADD . .
EXPOSE 8080
RUN dotnet restore
RUN dotnet build
ENTRYPOINT dotnet run
