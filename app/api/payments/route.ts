import { NextResponse } from 'next/server';
import { DEPOSIT_CONFIG } from '@/lib/payments';

export async function GET() {
  return NextResponse.json(DEPOSIT_CONFIG);
}
