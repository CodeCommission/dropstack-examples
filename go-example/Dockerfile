FROM golang:latest
ADD . /app
WORKDIR /app
EXPOSE 80
ENV SERVICE_PORT=80
RUN go build -o server .
ENTRYPOINT /app/server
