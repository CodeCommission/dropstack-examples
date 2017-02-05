FROM microsoft/dotnet:latest
WORKDIR /src
ADD . .
ENV SERVICE_PORT=80
EXPOSE 80
RUN dotnet restore
RUN dotnet build
ENTRYPOINT dotnet run
