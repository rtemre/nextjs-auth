// The most simple usage is when you want to require authentication for your
// entire site.
// export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';

export default withAuth({
  // Specify the routes you want to protect
  // You can use wildcard patterns to protect multiple routes
  pages: {
    signIn: '/api/auth/signin', // Redirect to sign-in page if not authenticated
  },
  callbacks: {
    authorized: ({ token }) => !!token, // Check if the user is authenticated
  },
});

// Configure routes to apply the middleware
export const config = {
  matcher: ['/dashboard'], // Example protected routes
};
