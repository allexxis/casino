/* eslint-disable import/no-anonymous-default-export */
export const BASE_URL =
   process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
export const MONGODB_URI =
   process.env.MONGODB_URI || 'user:pass@mongodb://localhost:27017';
export const DB_URL = process.env.DB_URL || 'postgres://localhost:5432';
export const SMTP_HOST = process.env.SMTP_HOST || '';
export const SMTP_PORT = process.env.SMTP_PORT || '';
export const SMTP_USER = process.env.SMTP_USER || '';
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
export const SMTP_FROM = process.env.SMTP_FROM || '';
export const GOOGLE_ID = process.env.GOOGLE_ID || '';
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || '';
