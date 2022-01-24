FROM alpine:3.15.0

RUN apk add --no-cache bash
COPY processor.sh /app/processor.sh
RUN chmod +x /app/processor.sh

ENTRYPOINT ["/app/processor.sh"]