import { NextResponse } from 'next/server';
import packageJson from '../../../../package.json';
export async function GET() {
   return NextResponse.json({ ok: 'ok', version: packageJson.version });
}
