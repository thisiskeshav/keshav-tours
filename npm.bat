@echo off
if "%1"=="run" (
  if "%2"=="dev" (
    call "%~dp0dev.bat"
    exit /b %ERRORLEVEL%
  )
  if "%2"=="build" (
    call "%~dp0build.bat"
    exit /b %ERRORLEVEL%
  )
  if "%2"=="preview" (
    call "%~dp0preview.bat"
    exit /b %ERRORLEVEL%
  )
)
if "%1"=="dev" (
  call "%~dp0dev.bat"
  exit /b %ERRORLEVEL%
)
if "%1"=="build" (
  call "%~dp0build.bat"
  exit /b %ERRORLEVEL%
)
call "%~dp0dev.bat" %*

