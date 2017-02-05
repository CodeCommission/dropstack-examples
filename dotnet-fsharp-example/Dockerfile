FROM microsoft/dotnet:1.0.3-sdk-projectjson
WORKDIR /src
ADD . .
EXPOSE 80
RUN dotnet restore
RUN dotnet build
ENTRYPOINT dotnet run --ip 0.0.0.0 --port 80
