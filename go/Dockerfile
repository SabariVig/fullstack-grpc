FROM golang:1.14-alpine3.11

WORKDIR /app

COPY . .

RUN go mod download

RUN go build -o main .

EXPOSE 9090

CMD [ "/app/main" ]
