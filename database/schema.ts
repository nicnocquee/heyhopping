import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: varchar('email', { length: 256 }),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
})
