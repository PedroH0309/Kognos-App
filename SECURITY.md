# Segurança do Kognos

## Comunicar vulnerabilidades

Não publique credenciais, dados pessoais, capturas de bancos ou passo a passo de exploração em Issues públicas. Entre em contato com `@PedroH0309` pelo GitHub ou use **Private vulnerability reporting** quando a opção estiver habilitada no repositório.

Relate versão afetada, impacto, passos mínimos para reproduzir (sem dados reais) e uma proposta de correção, se existir.

## Segredos e privacidade

- `NVIDIA_API_KEY` e `SUPABASE_SECRET_KEY` pertencem exclusivamente às variáveis de ambiente do servidor.
- Arquivos `.env.local`, tokens, logs com segredos e backups pessoais não podem ser enviados ao GitHub.
- A URL e chave *publishable* do Supabase não são senhas, mas nunca substituem RLS e autenticação.
- Credenciais já expostas devem ser revogadas e substituídas no respectivo provedor.
- Não use dados pessoais reais de estudantes em testes nem em Issues.
