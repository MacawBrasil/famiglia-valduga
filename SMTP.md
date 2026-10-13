# Configuração de e-mail por SMTP

Configure no servidor de aplicação as variáveis de `.env.example`: `SMTP_HOST`,
`SMTP_PORT`, `SMTP_SECURE`, `SMTP_REQUIRE_TLS`, `SMTP_USER`, `SMTP_PASS` e `SMTP_FROM`.
O remetente deve ser autorizado pelo provedor SMTP; pode incluir um nome de exibição.
Os destinatários, assuntos, conteúdo e reply-to continuam definidos pelas configurações
e formulários existentes da aplicação.

- Porta 587: `SMTP_SECURE=false`, `SMTP_REQUIRE_TLS=true` (STARTTLS obrigatório).
- Porta 465: `SMTP_SECURE=true` (TLS desde a conexão).
- Relay local sem autenticação: deixe usuário e senha vazios; para um servidor de
  testes sem TLS, use `SMTP_SECURE=false` e `SMTP_REQUIRE_TLS=false`.

Não desative a validação de certificados e não versione credenciais reais.
Atualize as variáveis no ambiente do deploy e reinicie a aplicação antes de testar
o formulário. Credenciais SMTP e entrega real em produção precisam ser verificadas
no ambiente de destino.
