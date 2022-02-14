import { NextRequest, NextResponse } from 'next/server';

export async function middleware(
  req: NextRequest,
): Promise<Response | NextResponse> {
  const url = req.nextUrl.clone();
  url.pathname = '/api/auth/signin';
  const sessionToken = req.cookies?.['next-auth.session-token'];
  if (!sessionToken) return NextResponse.rewrite(url);

  return NextResponse.next();
}
