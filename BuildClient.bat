@echo off
echo Building EWReborn Client Files...
cd ClientSource
npm run-script build
set /p temp="Process finished, Hit any Key to exit"