# Publicação segura e colaboração no GitHub

## Escolha recomendada: repositório privado

Para limitar acesso à implementação do Kognos, o mais efetivo é começar **privado** e adicionar colaboradores nominalmente. Um repositório público pode ser visualizado e forkeado por outras contas; um aviso de copyright não impede uma cópia técnica.

O repositório é **proprietário / All Rights Reserved**, não open source: consulte `LICENSE` e `CONTRIBUTING.md`. Não é correto afirmar que toda cópia constitui automaticamente plágio; o uso permitido depende da lei, de direitos autorais, da autorização e dos termos da plataforma.

## Criar o repositório na conta PedroH0309

1. Acesse `https://github.com/new` logado como `PedroH0309`.
2. Nome: `Kognos`.
3. Visibilidade: **Private**.
4. Não marque opções de criar README, gitignore ou licença: estes arquivos já existem.
5. Clique em **Create repository**.
6. Execute `PUBLICAR_NO_GITHUB.bat` a partir da pasta raiz, ou utilize os comandos Git abaixo.

```powershell
git init -b main
git add .
git commit -m "chore: inicializar Kognos v0.5 protegido"
git remote add origin https://github.com/PedroH0309/Kognos-App.git
git push -u origin main
```

Não compartilhe credenciais GitHub, NVIDIA ou Supabase no chat ou por mensagens.

## Colaboradores e controle de qualidade

1. Abra **Settings → Collaborators / Access → Add people** e convide somente quem participa do projeto.
2. Peça que trabalhem em branches específicas e abram Pull Requests, seguindo `CONTRIBUTING.md`.
3. Em **Settings → Rules / Branch protection** (se disponível no seu plano), ative proteção de `main`, bloqueie push forçado e exclusão, e exija revisão e status checks antes do merge.
4. Deixe **Issues** e **Pull requests** habilitados. Para privacidade maior, evite tornar público o repositório apenas para coletar sugestões; elas podem chegar por outro canal.
5. Antes de aprovar um PR, avalie direitos autorais, segurança, testes, acessibilidade e impactos em dados dos estudantes.

## Caso queira tornar público no futuro

O `LICENSE` continua proibindo reuso sem autorização, mas isso **não bloqueia** o recurso de fork/visualização previsto pelos termos do GitHub. Um repositório público permite contribuições de pessoas que não são colaboradoras, mediante propostas por PR. Considere publicar apenas partes não estratégicas se seu objetivo prioritário for impedir cópias.

## Serviços externos

- Nunca publique `apps/web/.env.local`, banco de dados, tokens ou backups privados.
- Caso uma credencial apareça num commit, apenas apagar o arquivo não basta: **revogue a credencial** e avalie remover o segredo do histórico.
- Certifique-se de respeitar as licenças de dependências e conteúdo de terceiros; o aviso proprietário cobre apenas conteúdo sobre o qual você detenha direitos.
