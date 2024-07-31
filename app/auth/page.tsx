// getServerSession is used to retrieve the session on the server side
import { getServerSession } from 'next-auth';

// Import the authentication options which contain the configuration for next-auth
import { options } from '../api/auth/[...nextauth]/options';
import { AUTH_MESSAGES } from '@/messages/auth';

export default async function Authentication() {
  // Retrieve the session information using the getServerSession function
  const session = await getServerSession(options);

  return (
    // Conditionally render content based on the presence of a session
    <div>
      {session ? (
        <div>{AUTH_MESSAGES.AUTHENTICATED}</div>
      ) : (
        <div>{AUTH_MESSAGES.NO_SESSION}</div>
      )}
    </div>
  );
}
