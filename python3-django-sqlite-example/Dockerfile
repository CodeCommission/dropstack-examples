FROM frolvlad/alpine-python3
STOPSIGNAL SIGINT
ENV PYTHONUNBUFFERED 1
ENV PORT=80
RUN apk add --no-cache sqlite
WORKDIR /app
ADD . .
EXPOSE 80
RUN pip3 install -r requirements.txt
CMD python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:80