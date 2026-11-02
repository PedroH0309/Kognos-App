# Kognos administrator-only LOCAL setup. Secret is never embedded in source or returned by HTTP.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $root 'apps\web\.env.local'
$template = Join-Path $root 'apps\web\.env.example'
Write-Host '=============================================' -ForegroundColor Cyan
Write-Host ' KOGNOS - CONFIGURAR TUTOR NVIDIA (LOCAL)' -ForegroundColor White
Write-Host '=============================================' -ForegroundColor Cyan
Write-Host 'A chave sera guardada SOMENTE no .env.local do servidor.' -ForegroundColor Yellow
Write-Host 'Nao cole a chave no Git, no chat ou em campos acessiveis a estudantes.' -ForegroundColor Yellow
Write-Host ''
if (-not (Test-Path $template)) { throw "Modelo de configuracao nao encontrado: $template" }
if (-not (Test-Path $envFile)) { Copy-Item -LiteralPath $template -Destination $envFile }
$secureKey = Read-Host 'Cole sua chave NVIDIA NOVA (entrada oculta)' -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureKey)
try { $key = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr) }
finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr); $secureKey.Dispose() }
if (-not $key -or $key -notmatch '^nvapi-[A-Za-z0-9_-]{24,}$') {
  $key = $null
  throw 'Chave nao parece ser uma credencial NVIDIA valida (nvapi-...). Nada foi alterado.'
}
$model = Read-Host 'Modelo (Enter para z-ai/glm-5.3-flash)'
if ([string]::IsNullOrWhiteSpace($model)) { $model = 'z-ai/glm-5.3-flash' }
if ($model -notmatch '^[A-Za-z0-9._/-]{3,120}$') { $key = $null; throw 'Nome de modelo invalido.' }
$content = [System.IO.File]::ReadAllText($envFile)
function Set-EnvValue ([string]$body,[string]$name,[string]$value) {
  $escaped = [regex]::Escape($name)
  $line = "${name}=${value}"
  if ([regex]::IsMatch($body, "(?m)^${escaped}=")) {
    return $body -replace "(?m)^${escaped}=.*$", $line
  }
  return $body.TrimEnd("`r", "`n") + "`n" + $line + "`n"
}
$content = Set-EnvValue $content 'NVIDIA_API_KEY' $key
$content = Set-EnvValue $content 'NVIDIA_MODEL' $model
$content = Set-EnvValue $content 'NVIDIA_API_BASE_URL' 'https://integrate.api.nvidia.com/v1'
# UTF-8 no BOM ensures Node/Next.js reads the environment file correctly.
[System.IO.File]::WriteAllText($envFile, $content, [System.Text.UTF8Encoding]::new($false))
$key = $null
Write-Host ''
Write-Host 'API NVIDIA configurada em apps\web\.env.local.' -ForegroundColor Green
Write-Host 'Reinicie o servidor (Ctrl+C e npm run dev) para aplicar.' -ForegroundColor Green
Write-Host 'Importante: acesso ao tutor exige login e Supabase funcional.'
