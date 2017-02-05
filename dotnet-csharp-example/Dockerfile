FROM microsoft/dotnet:latest
WORKDIR /src
ADD . .
EXPOSE 80
RUN dotnet restore
RUN dotnet build
ENTRYPOINT dotnet run
