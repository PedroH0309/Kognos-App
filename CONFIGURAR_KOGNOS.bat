@echo off
setlocal
cd /d "%~dp0"
set "ENVFILE=apps\web\.env.local"
set "TEMPLATE=apps\web\.env.example"
if not exist "%TEMPLATE%" (
  echo Modelo de configuracao nao encontrado.
  pause
  exit /b 1
)
if not exist "%ENVFILE%" copy "%TEMPLATE%" "%ENVFILE%" >nul
echo.
echo KOGNOS v0.5 - Configuracao privada local
echo A URL e a chave PUBLICAVEL do seu projeto Supabase ja estao preenchidas.
echo Complete SUPABASE_SECRET_KEY diretamente no arquivo.
echo Para preencher a API NVIDIA com entrada oculta, use CONFIGURAR_API_NVIDIA.bat.
echo Nunca compartilhe ou publique o arquivo .env.local.
echo.
start "" notepad "%ENVFILE%"
endlocal
