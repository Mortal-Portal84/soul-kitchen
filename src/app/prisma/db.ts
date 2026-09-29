import 'dotenv/config'
import { Temporal } from '@js-temporal/polyfill'
import postgres from '@prisma/orm-postgres/runtime'
import type { Contract } from './contract.d'
import contractJson from './contract.json' with { type: 'json' }

// Prisma декодирует timestamptz-колонки через глобальный Temporal, которого пока нет в Node
if (!('Temporal' in globalThis)) {
  Object.assign(globalThis, { Temporal })
}

export const db =postgres<Contract>({
  contractJson,
  url: process.env['SK_STORAGE_POSTGRES_PRISMA_URL']!,
});
