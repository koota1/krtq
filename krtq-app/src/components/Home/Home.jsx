import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsmobile from '../../aws-exports.js';

Amplify.configure(awsmobile);




const Home = () =>  {
  return (
    <div>
      <Authenticator>
        {({ signOut }) => (
          <main>
            <h1>Hello!</h1>
            <h3>This is the homepage - content goes here</h3>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};
export default Home;