import { auth } from '@/lib/auth';
 
export default auth((req) => {
    const isOnLoginPage = req.nextUrl.pathname.startsWith('/login');
    const isLoggedIn = !!req.auth;

    if (!isLoggedIn && !isOnLoginPage) return Response.redirect(new URL('/login', req.nextUrl));
    if (isLoggedIn && isOnLoginPage) return Response.redirect(new URL('/', req.nextUrl));
})
 
export const config = {
    // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};