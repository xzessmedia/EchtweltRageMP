@echo off
SET /P InputCommit=Aenderungsmessage:
SET /P InputBranch=Git Branch:
git add *
git commit -m "%InputCommit%"
git push -f origin %InputBranch%
set /p temp="Process finished, Hit any Key to exit"