#!/bin/bash
echo Building CEF Ressources
cd ClientSource/CEF && sudo npm run-script build
echo Finished: CEF Ressources has been built
