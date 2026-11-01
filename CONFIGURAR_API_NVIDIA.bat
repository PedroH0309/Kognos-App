@echo off
setlocal
cd /d "%~dp0"
title Kognos - Configurar API NVIDIA
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\configurar-nvidia.ps1"
if errorlevel 1 (
  echo.
  echo Configuracao nao concluida. Consulte a mensagem acima.
)
echo.
pause
endlocal
