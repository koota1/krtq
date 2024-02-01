import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports.js';
import { PostCreateForm } from '../../ui-components/PostCreateForm'
// Dont know whether declaring auth here is better of if better to declare in main.jsx
Amplify.configure(awsconfig);


const Home = () =>  {
  return (
    <div>
      <Authenticator>
        {({ signOut }) => (
          <main>
            <h1>Hello!</h1>
            <h3>This is the homepage - content goes here</h3>
            <PostCreateForm/>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};
export default Home;