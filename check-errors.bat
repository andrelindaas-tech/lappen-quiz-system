@echo off
echo Checking for TypeScript errors...
cd /d "c:\Users\andre.lindaas\Documents\lappen-quiz-system"
call npx --yes tsc --noEmit 2>&1
echo.
echo TypeScript check complete!
pause
