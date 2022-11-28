# Getting started

## Prerequisites

 - npm
 
 `npm install npm -g`
 
 ## Installation

1. Clone the repo

     ```git clone https://github.com/davidhanenko/a2z-backend.git```

2. Install NPM packages

     ```npm install```

3. Create configuration file .env using [.env.example](https://github.com/davidhanenko/a2z-backend/blob/main/.env.example)

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

## Usage

### develop

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

`npm run develop`


### start

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

`npm run start`

### build

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

`npm run build`

After starting Admin panel is available at http://localhost:1337/admin. There you can create a new user and manage content.
Data transfer between CMS and UI implemented with Apollo GraphQL.

Larn more about Strapi CMS 
[Strapi documentation](https://docs.strapi.io) - Official Strapi documentation

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).
