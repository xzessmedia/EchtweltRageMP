#!/bin/bash
echo Echtwelt RageMP Source Installation
echo Installing Client Source..
cd ClientSource && npm install && cd ..
echo Installing Server Source..
cd ServerSource && npm install && cd ..
echo Installing CEF Source..
cd ClientSource/CEF && npm install && cd ../..
echo Install finished
