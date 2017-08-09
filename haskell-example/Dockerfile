FROM fpco/stack-build:lts
EXPOSE 80
ADD . /app
WORKDIR /app
RUN stack setup
RUN stack build
ENTRYPOINT stack exec