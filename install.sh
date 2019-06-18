#!/bin/bash
echo Echtwelt RageMP Source Installation
echo Installing Client Source..
cd ClientSource && sudo npm install && cd ..
echo Installing Server Source..
cd ServerSource && sudo npm install && cd ..
echo Installing CEF Source..
cd ClientSource/CEF && sudo npm install && cd ../..
echo Install finished
