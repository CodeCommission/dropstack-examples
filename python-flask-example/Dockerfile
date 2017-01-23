FROM frolvlad/alpine-python2
WORKDIR /src
ADD . .
EXPOSE 80
RUN pip install -r requirements.txt
ENTRYPOINT python server.py
