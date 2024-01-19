import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DB_URL } from '@src/config';
const sql = postgres(DB_URL, { max: 1 });
const db = drizzle(sql);

export default db;
