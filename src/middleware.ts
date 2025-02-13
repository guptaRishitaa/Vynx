import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";



const isProtectedRoutes = createRouteMatcher([
    '/dashboard(.*)', '/api/payment', '/payment(.*)'
])

const isPublicRoutes = createRouteMatcher([
  '/auth/callback(.*)',  // Ensure `/auth/callback` is public
  '/auth/sign-in(.*)',   // Add any other public authentication routes if needed
]);




export default clerkMiddleware(async (auth, req) => {

  if (isPublicRoutes(req)) {
    return;
  }
  
    if(isProtectedRoutes(req)){
  await auth.protect()
    }
 });                                        

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};