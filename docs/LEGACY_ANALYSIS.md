# Análise dos protótipos anteriores

## Snapshot A — `FOCO_Projeto_Completo.zip`

- Aplicação local em Python + Streamlit + SQLite, concentrada em `foco_estudos.py`.
- Já inclui painel com XP/aproveitamento, diagnóstico de 20 questões, simulados configuráveis, banco local, histórico de tentativas, revisão espaçada, plano semanal, exportação CSV/ICS, tutor opcional por API, ajustes de acessibilidade e backup JSON.
- Escopo declarado no README: MVP local, sem login remoto, sincronização de calendário, hospedagem multiusuário ou distribuição de conteúdo oficial.
- Questões de demonstração são declaradas autorais/não oficiais. O tutor pede chave de API na interface em uma versão anterior; na plataforma pública isso deve ser migrado para segredo server-side.

## Snapshot B — `foco-frontend-streamlit.zip`

- Frontend Streamlit modular com navegação, tema, componentes, páginas separadas e contratos de serviço.
- O README declara que todos os dados são demonstrativos e que os contratos ainda não estão conectados a backend.
- É uma boa referência de navegação e módulos, mas não deve ser tratado como funcionalidade persistida.

## Decisão de migração

1. Manter os dois ZIPs originais intactos em `legacy/`.
2. Reaproveitar os requisitos e regras de negócio úteis do MVP.
3. Reutilizar a taxonomia e a navegação da UI modular como referência visual/funcional.
4. Não portar o SQLite local diretamente para uma base multiusuário sem revisão de esquema e migração de dados.
5. Quando houver dados reais a preservar, mapear `profile`, `questions`, `attempts`, `tasks`, `review_items`, `user_stats` e `daily_activity` para o novo esquema e importar com validação, mantendo backup original.

**Limitação desta inspeção:** a análise refere-se aos arquivos arquivados na biblioteca, não ao estado atual da pasta local no computador. Se o projeto local foi alterado depois desses snapshots, é necessário comparar antes de aplicar mudanças sobre ele.
