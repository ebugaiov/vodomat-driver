import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

const publicRoutes = ['/login', ];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    
    const isPublicRoute = publicRoutes.some(route => 
        nextUrl.pathname.startsWith(route)
    );
    const isAuthRoute = nextUrl.pathname.startsWith('/login');

    // Redirect logged-in users away from auth pages
    if (isLoggedIn && isAuthRoute) {
        const callbackUrl = nextUrl.searchParams.get('callbackUrl') || '/';
        return Response.redirect(new URL(callbackUrl, nextUrl));
    }

    // Redirect non-logged-in users to login (except public routes)
    if (!isLoggedIn && !isPublicRoute) {
        const loginUrl = new URL('/login', nextUrl);
        loginUrl.searchParams.set('callbackUrl', nextUrl.pathname);
        return Response.redirect(loginUrl);
    }

    return NextResponse.next();
})

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};