// getServerSession is used to retrieve the session on the server side
// import { getServerSession } from 'next-auth';

// Import the authentication options which contain the configuration for next-auth
// import { options } from './api/auth/[...nextauth]/options';

export default async function Home() {
  // Retrieve the session information using the getServerSession function
  //   const session = await getServerSession(options);

  return (
    // Conditionally render content based on the presence of a session
    // <div>{session ? <div>Authenticated</div> : <div>No session</div>}</div>
    // For now, simply return a static home component
    <div>Home</div>
  );
}
