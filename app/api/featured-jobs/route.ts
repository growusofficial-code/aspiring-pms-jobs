import { NextResponse } from 'next/server';
import jobs from '@/data/mock-jobs.json';

export async function GET() {
  const featured = (jobs as any[]).slice(0, 3);
  return NextResponse.json({ jobs: featured });
}
