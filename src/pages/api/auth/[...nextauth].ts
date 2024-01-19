import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Email from 'next-auth/providers/email';
import Google from 'next-auth/providers/google';
import db from '@lib/db';
import {
   SMTP_HOST,
   SMTP_PASSWORD,
   SMTP_PORT,
   SMTP_USER,
   SMTP_FROM,
   GOOGLE_ID,
   GOOGLE_SECRET,
} from '@config/index';

export default NextAuth({
   adapter: DrizzleAdapter(db) as any,
   providers: [
      Email({
         server: {
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            auth: {
               user: SMTP_USER,
               pass: SMTP_PASSWORD,
            },
         },
         from: SMTP_FROM,
      }),
      Google({
         clientId: GOOGLE_ID,
         clientSecret: GOOGLE_SECRET,
      }),
   ],
});
