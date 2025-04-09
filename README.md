# NorrisClub

Este é um projeto que demonstra uma aplicação Next.js. Ela ilustra conceitos elementares como autenticação, middleware, rotas dinâmicas e consumo de API externa - tudo isso com o poder lendário de Chuck Norris!

## Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- API pública do [Chuck Norris Jokes](https://api.chucknorris.io/)

## Funcionalidades

- **Página estática (rota '/'):** Conteúdo fixo com boas-vindas ao NorrisClub.
- **Consumo de API externa ('/chuck'):** Exibe piadas/fatos aleatórios sobre Chuck Norris com otimização de cache ('revalidate').
- **Rota dinâmica protegida:** ('/norris-club/[username]')\*\*: Acessível após login. Personalizada com nome do usuário.
- **Middleware:** Protege rotas privadas com redirecionamento automático para '/login?redirect=/...'.
- **Autenticação simples**: Login com usuários mockados e controle via cookie.

## Usuários de exemplo:

- **Usuário:** 'norris' | '**Senha:** 'roundhouse'
- **Usuário:** 'daniel' | '**Senha:** '1234'

## Para rodar o projeto localmente

1. Clonar o repositório:

```bash
git clone https://github.com/seu-usuario/norrispedia.git
cd norrispedia

```

2. Instalar dependências:

```bash
npm install
```

3. Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acessar no navegador:
   `http://localhost:3000`

## Estrutura do Projeto:

```bash
app/
├── chuck/                # Página com API externa
├── login/                # Página de login
├── norris-club/[user]/   # Rota dinâmica protegida
├── layout.tsx            # Layout geral
├── page.tsx              # Página inicial estática
components/
├── Navbar.tsx            # Barra de navegação
middleware.ts             # Middleware de autenticação
```

## Observações:

- O cache de piadas foi configurado para 5 segundos como exemplo de performance.
- O sistema de autenticação não utiliza banco de dados, para manter a simplicidade. Os usuários estão simulados no próprio código.

## Finalizando...

E isto cobre os principais aspectos do projeto. Para dúvidas e questionamentos, por gentileza entre em contato com o desenvolvedor através dos canais disponíveis no Github.

Abraço e até mais!
