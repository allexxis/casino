import type { Config } from 'drizzle-kit';

export default {
   schema: './drizzle/schema.ts',
   driver: 'pg',
   out: './drizzle',
   dbCredentials: {
      connectionString:
         process.env.DB_URL ||
         'postgres://postgres:password@localhost:5432/postgres',
   },
} satisfies Config;
