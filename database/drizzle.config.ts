import type { Config } from 'drizzle-kit'
import path from 'path'
import * as dotenv from 'dotenv'
import { env } from '@/app/env'

dotenv.config()

export default {
  schema: path.join(__dirname, 'schema.ts'),
  out: path.join(__dirname, 'generated'),
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config
