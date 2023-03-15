import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [ user, setUser ] = useState(null);
    const [ profile, setProfile ] = useState(null);


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            localStorage.setItem('userName', codeResponse.profileObj.name);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );



    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.removeItem('userName');
    };

    useEffect(() => {
        const userName = localStorage.getItem('userName');
        if(userName) {
            setProfile({name: userName});
        }
    }, [])

    return (
        <div>
            {profile ?
                <div className="log-out-block">
                    <h3>Hello, {profile.name}</h3>
                    <button onClick={() => logOut()} className="google-button">
                        LogOut
                    </button>
                </div>
                :
                <button onClick={() => login()} className="google-button">
                    <p>Sign in</p>
                    <i className="fa-brands fa-google"></i>
                </button>
            }

        </div>
    );
}
export default Login;