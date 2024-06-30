import type { NextRequest } from 'next/server'
import { getSessionData, knock } from './auth'
 
export async function middleware(request: NextRequest) {
  const sessionData = await getSessionData();
  const token = await sessionData.token;

  // if (token && request.nextUrl.pathname.match('/login')) {
  //   return Response.redirect(new URL('/', request.url))
  // }
 
  if (!token && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }

  if(token && !request.nextUrl.pathname.startsWith('/login')){

    const isAuthorize = await knock(token);

    console.log(isAuthorize);
    if(isAuthorize !== 200){
      return Response.redirect(new URL('/login', request.url))
    }
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}