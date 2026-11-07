@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if errorlevel 1 (
  echo Python launcher ^(py^) was not found. Install Python or use the CSV import option.
  pause
  exit /b 1
)
echo Serving City Request Triage at http://localhost:8000
echo Keep this window open while using the prototype. Press Ctrl+C to stop the server.
py -m http.server 8000 --bind 127.0.0.1
pause

