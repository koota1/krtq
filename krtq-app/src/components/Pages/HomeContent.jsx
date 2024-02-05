/* eslint-disable react/prop-types */
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from "react-router-dom";

function HomeContent() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await signOut();
            navigate("/");
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    };

    return (
        <div>
            <main>
                <h1>Hello!</h1>
                <h3>This is the homepage - content goes here</h3>
                <button onClick={handleSignOut}>Sign Out</button>
            </main>
        </div>
    );
}

export default HomeContent;