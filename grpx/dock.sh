docker rm -f $(docker ps -aq)
docker build -t envoy .
docker run -d -p 8080:8080 envoy
