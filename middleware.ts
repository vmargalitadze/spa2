
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/app(.*)', '/api(.*)', '/admin(.*)']);

type UserMetadata = {
  isBetaUser?: boolean;
  isAdmin?: boolean;
};

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
   
    const user = await auth();
    user.protect(); 

    const { sessionClaims } = user;
    const { isAdmin} = sessionClaims?.metadata as UserMetadata;

    if (isAdmin) {
    
      return NextResponse.next();
    }


    if (!isAdmin && req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/error', req.url));
    }
  
    
  
  }


  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
