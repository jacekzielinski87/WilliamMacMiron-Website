import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  if (path === '/admin') {
    return NextResponse.next();
  }

  const isAdminRoute = path.startsWith('/admin/');
  const isAuthenticated = request.cookies.get('isAdmin')?.value;

  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};