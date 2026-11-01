@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo [KOGNOS] Node.js nao encontrado. Instale Node.js 22 LTS em https://nodejs.org
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo [KOGNOS] npm nao encontrado. Reinstale Node.js com npm.
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo [KOGNOS] Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo [KOGNOS] Nao foi possivel instalar dependencias. Confira sua internet.
    pause
    exit /b 1
  )
)
echo [KOGNOS] Iniciando o site em http://localhost:3000
call npm run dev
if errorlevel 1 pause
endlocal
