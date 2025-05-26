import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); 

  return NextResponse.json({
    error: 'This endpoint does not support GET requests.',
    status: 200,
  });
}
