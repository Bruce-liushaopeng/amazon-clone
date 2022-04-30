import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // prevent default as we don't want to refresh
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(e => {
                alert(e.message);
            })
    }


    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    console.log(auth);
                    if (auth) {
                        history.push('/')
                    }
                }
            })
            .catch(error => alert(error.message))
    }

    return (

        <div className='login'>
            <Link to='/' >

                <img className='login__logo' alt="" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />

            </Link >

            <div className="login__container">
                <h1>
                    Sign-in
                </h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

                    <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your amazon account</button>
            </div>
        </div >
    )
}

export default Login