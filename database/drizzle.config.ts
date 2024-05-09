import type { Config } from 'drizzle-kit'
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config()

export default {
  schema: path.join(__dirname, 'schema.ts'),
  out: path.join(__dirname, 'generated'),
} satisfies Config
