@echo off
echo Building EWReborn...
cd ServerSource
npm run-script build
set /p temp="Process finished, Hit any Key to exit"