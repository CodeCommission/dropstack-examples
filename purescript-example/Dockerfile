FROM socialengine/nginx-spa
EXPOSE 80
RUN apt-get update && \
    apt-get -y install curl gnupg apt-utils git apt-transport-https ca-certificates netbase && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    npm install -g purescript && \
    npm install -g pulp && \
    npm install -g bower
ADD . /app
WORKDIR /app
RUN npm install react react-dom
RUN bower --allow-root install
RUN pulp browserify --to purs.js