import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { connectionString, db } from './db'
import postgres from 'postgres'
import path from 'path'

console.log(connectionString)
const main = async () => {
  const sql = postgres(connectionString, { max: 1 })

  await migrate(db, { migrationsFolder: path.join(__dirname, 'generated') })

  await sql.end()

  process.exit(0)
}

main()
