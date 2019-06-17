#!/bin/bash
echo Echtwelt RageMP Source Build
sh BuildClient.sh
sh BuildCEF.sh
sh BuildServer.sh
echo Build Process completed you can now deploy
