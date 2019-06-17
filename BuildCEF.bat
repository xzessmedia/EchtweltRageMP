@echo off
echo Building EWReborn CEF Files...
cd ClientSource
cd CEF
npm run-script build
set /p temp="Process finished, Hit any Key to exit"