# Auth Workflow - Node.js Express PostgreSQL, Redis, Prisma, Docker

1. Creating PostgreSQL & Redis Database with Docker-compose
2. Initialize a new Typescript Node.js project
`npm init -y && npm install -D typescript @types/node && npx tsc --init`
3. Install `dotenv` and `config` packages.
`npm install config dotenv && npm install -D @types/config`
4. In the root directory create a `config` folder and within the config directory create two files named `default.ts` and `custom-env-variables.ts`
5. Validate Environment Variables by adding `npm install envalid`
6. Initialize a Prisma Project with Express.js -  `npm install -D prisma` and `npx prisma init --datasource-provider postgresql`
7. Creating a database schema with Prisma - `/prisma/schema.prisma`
8. Database Migration with Prisma - create a new migration, run the following command: `npx prisma migrate dev --name user-entity --create-only`
9. Install the Prisma Client - `npm i @prisma/client`
10. To create the users table in the database, run the following command - `npx prisma db push`
11. connect an ExpressJs app to Redis - `npm i express redis && npm i -D @types/express`;
12. Since we’re using TypeScript, we need a package to automatically restart the server upon file change. `npm i ts-node-dev`