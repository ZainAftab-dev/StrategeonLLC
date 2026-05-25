@echo off
setlocal

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Failed to install dependencies.
    pause
    exit /b 1
  )
)

set PORT=3000
netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul
if not errorlevel 1 (
  set PORT=3001
)

echo Building Strategeon...
call npm run build
if errorlevel 1 (
  echo.
  echo Build failed.
  pause
  exit /b 1
)

echo Starting Strategeon on http://localhost:%PORT%
start "" "http://localhost:%PORT%"
call ".\node_modules\.bin\next.cmd" start -H 127.0.0.1 -p %PORT%

pause
