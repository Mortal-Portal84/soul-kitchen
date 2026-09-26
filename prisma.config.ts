import 'dotenv/config';
import { definePrismaConfig } from '@prisma/cli-engine';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./src/app/prisma/contract.ts",
    output: "./src/app/prisma",
    db: {
      connection: process.env['SK_STORAGE_POSTGRES_PRISMA_URL']!,
    },
  }),
});
