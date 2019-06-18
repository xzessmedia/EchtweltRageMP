#!/bin/sh
echo Launching Server
rm -rf /ewreborn/logs && mkdir /ewreborn/logs && touch /ewreborn/logs/server.log
cd /ewreborn/ragemp-srv
./server | tee /ewreborn/logs/server.log

