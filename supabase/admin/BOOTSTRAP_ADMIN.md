# Criação do primeiro administrador

Não existe administrador padrão no seed. Isso evita deixar uma conta privilegiada previsível.

Depois de criar a conta do operador pelo Supabase Auth e verificar o endereço de e-mail, execute no SQL Editor do projeto correto, substituindo o e-mail:

```sql
insert into public.user_roles (user_id, role)
select id, 'admin'
from auth.users
where lower(email) = lower('SEU_EMAIL_VERIFICADO')
on conflict (user_id, role) do nothing;
```

Confira se exatamente uma conta foi promovida:

```sql
select u.id, u.email, r.role
from auth.users u
join public.user_roles r on r.user_id = u.id
where lower(u.email) = lower('SEU_EMAIL_VERIFICADO');
```

Use uma conta individual protegida por autenticação forte. Não promova usuários por parâmetro de navegador, metadata enviada no cadastro ou formulário público. Registre a operação no controle administrativo do projeto.
