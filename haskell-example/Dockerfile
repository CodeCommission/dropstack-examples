FROM haskell
EXPOSE 80
RUN stack setup
ADD . /app
WORKDIR /app
RUN stack build
ENTRYPOINT stack exec $(find . -name *.cabal -print | head -n 5 | grep -o '[^/]*$' | cut -d'.' -f1)