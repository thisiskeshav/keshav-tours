@echo off
title Keshav Tours and Travels - Website Server
color 0A
echo.
echo ============================================
echo   KESHAV TOURS AND TRAVELS - Local Server
echo ============================================
echo.
echo  Starting your website...
echo  Please wait a few seconds...
echo.
echo  Once started, open your browser and go to:
echo.
echo       http://localhost:5173
echo.
echo  Keep this window OPEN while using the site.
echo  To STOP the server, close this window.
echo.
echo ============================================
echo.

set "ELECTRON_RUN_AS_NODE=1"
set "NODE_PATH=C:\Users\LENOVO\AppData\Local\Programs\Antigravity IDE\resources\app\node_modules"
"C:\Users\LENOVO\AppData\Local\Programs\Antigravity IDE\Antigravity IDE.exe" "C:\Users\LENOVO\AppData\Local\Programs\Antigravity IDE\resources\app\node_modules\vite\bin\vite.js"

pause

