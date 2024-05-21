## Sobre o projeto

![chrome-capture-2024-3-15](https://github.com/Keemluvr/metrix/assets/31359251/6f256e20-6352-45d1-b524-8a1b7e9f1c38)


Esta aplicação requer autenticação para ser utilizada. Após o login, os usuários são listados de acordo com suas funções e têm acesso a operações de criação, leitura, atualização e exclusão (CRUD) de usuários, com base em suas permissões.

Para testá-lo, você pode acessar por meio deste link:
[metrix-neon.vercel.app](metrix-neon.vercel.app)

## 📝 Tabela de conteúdos

- [Usuários disponíveis](#frowning_person-usuários-disponíveis)
- [Tecnologias Utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
- [Como executar o projeto](#point_right-como-executar-o-projeto)
- [Estrutura do Projeto](#mag_right-estrutura-do-projeto)
- [Ajustes e/ou novas funcionalidades para o sistema](#-ajustes-eou-novas-funcionalidades-para-o-sistema)

## :frowning_person: Usuários disponíveis

### Admin

**email**: admin@admin.com  
**senha**: admin@admin.com

### User

**email**: user@user.com  
**senha**: user@user.com

## ⛏️ Tecnologias Utilizadas

- **Next.js**: Framework de React para desenvolvimento de aplicações web.
- **TypeScript**: Linguagem de programação para tipagem estática de dados.
- **Tailwind CSS**: Biblioteca de utilitários CSS para desenvolvimento de interfaces.
- **next-intl**: Pacote para internacionalização de aplicações Next.js.
- **React Query**: Biblioteca para gerenciamento de estados e requisições assíncronas em React.
- **Next UI**: Biblioteca de componentes UI para Next.js.
- **React Hook Form**: Biblioteca para criação de formulários em React.

### Testes:

- **Cypress**: Ferramenta de teste de interface de usuário para testes de integração e end-to-end.

### Ferramentas de Desenvolvimento:

- **Husky**: Ferramenta para execução de scripts Git hooks.
- **Prettier**: Ferramenta para formatação de código.
- **ESLint**: Ferramenta para análise estática de código em JavaScript e TypeScript.

## :point_right: Como executar o projeto

1. Instale as dependências do projeto:

   ```sh
   npm install
   ```

2. Configure o Husky com o seguinte comando:

   ```sh
   npm run prepare
   ```

3. Crie um arquivo com o nome `.env` na raiz do projeto com a seguinte configuração:

   ```sh
    ENVIRONMENT="local"
    NEXT_PUBLIC_INITIAL_PATH_URL="http://localhost:3000"
    NEXT_PUBLIC_INITIAL_PATH_URL_API="http://localhost:3000/api"
    DATABASE_URL="" # Para teste é possível criar um banco no https://supabase.com/ e colar o link da URI aqui
    NEXTAUTH_SECRET="loremipsumdolor"
    NEXTAUTH_URL="http://localhost:3000"
   ```

4. Execute a aplicação:
   ```sh
   npm run dev
   ```

5. Execute os testesÇ
    ```sh
   npm run cypress:open
   ```

## :mag_right: Estrutura do Projeto

A aplicação segue uma estrutura de código organizada e modular, facilitando a manutenção e extensão do projeto. Aqui está uma visão geral da estrutura do diretório:

```sh
/
|-- cypress/
|-- public/
|-- src/
    |-- api/
    |-- app/
    |-- components/
    |-- config/
    |-- constants/
    |-- data/
    |-- helpers/
    |-- hooks/
    |-- messages/
    |-- middleware/
    |-- modules/
    |-- providers/
    |-- services/
    |-- types/
|-- cypress.config.ts
|-- next.config.ts
|-- tailwind.config.ts
|-- README.md
```

#### `/cypress`

- Esta pasta contém os testes de integração e end-to-end escritos com Cypress, uma ferramenta de automação de testes.

#### `/public`

- Contém os arquivos estáticos da aplicação, como ícones e imagens.

#### `/src`

- **`api`**: Contém os arquivos relacionados a lógica da API e uma pasta helpers para funções auxiliares.

- **`app`**: Contém o componente principal da aplicação, onde fica estruturado as páginas e rotas da API e sua inicialização.

- **`components`**: Contém componentes reutilizáveis da aplicação.

- **`config`**: Armazena arquivos de configuração da aplicação.

- **`constants`**: Contém constantes utilizadas em todo o projeto.

- **`data`**: Nesta pasta, são armazenadas as queries e mutations utilizadas com o React Query para gerenciamento de dados na aplicação. Aqui estão os principais componentes:

  - use-\*-query: Contém as queries utilizadas para buscar dados na API. Cada arquivo representa uma query específica.

  - use-\*-mutation: Contém as mutations utilizadas para realizar operações de criação, atualização ou exclusão de dados na API. Assim como as queries, cada arquivo pode representa uma mutation específica.

- **`helpers`**: Contém funções auxiliares ou utilitárias utilizadas em todo o projeto, como por exemplo o guard, que possui a função de auxiliar no controle de permissões de usuário.

- **`hooks`**: Contém custom hooks reutilizáveis em vários componentes.

- **`messages`**: Nesta pasta, são armazenados arquivos de mensagens de localização da aplicação. Atualmente, estão disponíveis apenas mensagens em inglês e português.

- **`middleware`**: Contém middleware para tratamento de requisições.

- **`modules`**: Contém módulos da aplicação, organizados por funcionalidade.

- **`providers`**: Contém providers de contexto ou estado global da aplicação.

- **`services`**: Contém serviços responsáveis pela lógica de negócio e integração com APIs.

- **`types`**: Contém definições de tipos TypeScript utilizadas em todo o projeto.

### Outros Arquivos

- **`cypress.config.ts`**: Arquivo de configuração do Cypress.

- **`next.config.ts`**: Arquivo de configuração do Next.js.

- **`tailwind.config.ts`**: Arquivo de configuração do Tailwind CSS, utilizado para personalizar e ajustar as configurações do Tailwind, incluindo temas, variantes e plugins.

Esta estrutura organiza o código de forma modular e separa claramente as responsabilidades de cada parte da aplicação, facilitando a manutenção e o desenvolvimento.

## 🔨 Ajustes e/ou novas funcionalidades para o sistema:

- [ ] (Melhoria) Acessibilidade
- [ ] (Melhoria) Visualização e o armazenamento das imagens
- [ ] (Ajuste) Deslogar o usuário caso ele exclua a própria conta
- [ ] (Ajuste) Ao atualizar a role de um usuário ele precisa deslogar e logar novamente para que a sessão atualize os dados
- [ ] (Ajuste) Responsividade
- [ ] (Ajuste) PRODUÇÃO - Toasts não estão pegando a tradução correta, mas local funciona
