@echo off
title Push Keshav Tours to GitHub
color 0B
echo.
echo ========================================================
echo   PUSHING KESHAV TOURS AND TRAVELS TO GITHUB
echo ========================================================
echo.
echo  Target Repository:
echo  https://github.com/thisiskeshav/keshav-tours.git
echo.
echo  Pushing code to branch 'main'...
echo.

cd /d "d:\PROJECTS\Business folder"
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! All files have been pushed to GitHub!
    echo ========================================================
    echo.
) else (
    echo.
    echo ========================================================
    echo   If prompted, please sign in to GitHub above.
    echo ========================================================
    echo.
)

pause

