@echo off
SET /P InputBranch=Git Branch:
echo Wechsel auf %InputBranch%...
git checkout -b %InputBranch%
set /p temp="Process finished, Hit any Key to exit"