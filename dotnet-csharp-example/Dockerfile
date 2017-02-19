FROM microsoft/dotnet:1.1.0-sdk-projectjson 
WORKDIR /src
ADD . .
ENV SERVICE_PORT=80
EXPOSE 80
RUN dotnet restore
RUN dotnet build
ENTRYPOINT dotnet run
