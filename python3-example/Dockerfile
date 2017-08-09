FROM frolvlad/alpine-python3
RUN apk add --no-cache sqlite
WORKDIR /app
ADD . .
EXPOSE 80
ENV PORT=80
RUN pip3 install -r requirements.txt
ENTRYPOINT ./run.sh