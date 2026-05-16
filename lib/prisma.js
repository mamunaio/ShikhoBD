import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import Database from 'better-sqlite3'

const prismaClientSingleton = () => {
  const db = new Database('prisma/dev.db')
  const adapter = new PrismaBetterSqlite3(db)
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()
export default prisma
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
