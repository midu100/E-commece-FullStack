import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SEC);

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Protect only admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('R_FS-TOKEN')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, secret);

      const userRole = payload.role;

      // ✅ Inline role check (no separate object)
      const allowedRoles = ['admin', 'super-admin'];

      if (!allowedRoles.includes(userRole)) {
        return NextResponse.redirect(new URL('/', request.url));
      }

      // ✅ Token valid + role allowed → continue
      return NextResponse.next();

    } catch (error) {
      console.log('JWT Error:', error.message);
      request.cookies.delete("X_AS-TOKEN");
      request.cookies.delete("R_FS-TOKEN");
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};