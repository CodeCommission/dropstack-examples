FROM alpine:3.5

COPY tasks/ /etc/periodic/
RUN chmod -R +x /etc/periodic/
RUN crontab -l; echo '*/1 * * * * run-parts /etc/periodic/1min' | crontab -
RUN crontab -l
CMD crond -f
