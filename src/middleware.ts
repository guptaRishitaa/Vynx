// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";



// const isProtectedRoutes = createRouteMatcher([
//     '/dashboard(.*)', '/api/payment', '/payment(.*)'
// ])

// const isPublicRoutes = createRouteMatcher([
//   '/auth/callback(.*)',  // Ensure `/auth/callback` is public
//   '/auth/sign-in(.*)',   // Add any other public authentication routes if needed
// ]);




// export default clerkMiddleware(async (auth, req) => {

//   if (isPublicRoutes(req)) {
//     return;
//   }
  
//     if(isProtectedRoutes(req)){
//   await auth.protect()
//     }
//  });                                        

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/payment',
  '/payment(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  const origin = req.headers.get('Origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle protected routes
  if (isProtectedRoute(req)) await auth.protect();

  // Handle simple requests
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};