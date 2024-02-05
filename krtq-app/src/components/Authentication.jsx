import '@aws-amplify/ui-react/styles.css';
import {Amplify} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import HomeContent from "./Pages/HomeContent.jsx";
import config from ".././amplifyconfiguration.json"
Amplify.configure(config);

function Authentication() {
    return (
        <Authenticator loginMechanisms={["username"]} socialProviders={['facebook', 'google']}>
            <HomeContent/>
        </Authenticator>
    );
}

export default Authentication;