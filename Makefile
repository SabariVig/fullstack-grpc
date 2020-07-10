rgo:
	go run go/server.go
rpython:
	python python/server.py
proxy:
	docker run -d --network=host envoy
goproxy:
	docker-compose up -d
