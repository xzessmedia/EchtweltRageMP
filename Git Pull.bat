@echo off
SET /P InputBranch=Git Branch:
echo Ziehe die neusten Daten...
git pull ssh://git@github.com:xzessmedia/EchtweltRageMP.git %InputBranch%
set /p temp="Process finished, Hit any Key to exit"