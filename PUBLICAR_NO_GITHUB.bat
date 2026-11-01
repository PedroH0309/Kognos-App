@echo off
setlocal
cd /d "%~dp0"
where git >nul 2>nul
if errorlevel 1 (
  echo ERRO: Git nao encontrado. Instale Git para Windows.
  pause
  exit /b 1
)
echo.
echo IMPORTANTE: crie antes um repositorio PRIVADO e VAZIO chamado Kognos em https://github.com/new
echo.
choice /m "O repositorio privado PedroH0309/Kognos-App ja existe"
if errorlevel 2 exit /b 1
if not exist ".git" (
  git init -b main
  if errorlevel 1 goto failed
)
git add .
if errorlevel 1 goto failed
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "chore: inicializar Kognos v0.5 protegido"
  if errorlevel 1 (
    echo Falha ao criar commit. Configure sua identidade: git config --global user.name "Seu Nome"
    echo e git config --global user.email "seu-email@example.com"
    goto failed
  )
)
git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin https://github.com/PedroH0309/Kognos-App.git
  if errorlevel 1 goto failed
)
echo Enviando branch main... pode ser necessaria autenticacao do GitHub.
git push -u origin main
if errorlevel 1 goto failed
echo.
echo SUCESSO: https://github.com/PedroH0309/Kognos-App
pause
exit /b 0
:failed
echo.
echo FALHA. Confira a mensagem acima e consulte docs\PROTECAO_E_COLABORACAO_GITHUB.md
pause
exit /b 1
