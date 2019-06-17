#!/bin/bash
echo Echtwelt RageMP Source Deploy
echo Building Container Image
docker-compose build
echo Starting Server Stack
sudo docker-compose up -d
