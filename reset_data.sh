#!/bin/sh

echo "Wiping data then restarting containers"

echo "Killing containers"

cd infra

docker-compose down

echo "Pruning container and removing data from DB..."

docker container prune -f && docker volume rm db-data

./start-infra.sh