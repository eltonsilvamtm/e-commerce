import React, {useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        //some fancy firebase login

    }
    const register = e =>{
        e.preventDefault();
        //some fancy firebase stuff
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
        }).catch(error => alert(error.message))

    }
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"/>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail:</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password:</h5>
                <input type='password' value={password} onChange= {e=> setPassword(e.target.value)}/>

                <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                <p>By singing-in you agree to the store's Conditions of use & sale.
                    Please see our privecy notice, our cookies notice and out interest-based ads notice.
                </p>
                <p></p>
                <button className='login__registerButton' onClick={register}>Create an account</button>
            </form>
        </div>

    </div>
  )
}

export default Login