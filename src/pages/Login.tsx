import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider,
    linkWithCredential,
    EmailAuthProvider,
    linkWithRedirect,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirebase } from '../app/firebase';

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
    const [registerFormData, setRegisterFormData] = useState({ email: '', password: '' });

    const { auth } = getFirebase();

    const handleChangeLogin = (event: any) => {
        const { name, value } = event.target;
        setLoginFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleLogin = (event: any) => {
        console.log('handleLogin 0', loginFormData);
        event.preventDefault();
        console.log('handleLogin', loginFormData);
    };

    const handleChangeRegister = (event: any) => {
        const { name, value } = event.target;
        setRegisterFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleRegister = async (event: any) => {
        event.preventDefault();
        console.log('handleRegister', registerFormData);

        const result = await createUserWithEmailAndPassword(auth, registerFormData.email, registerFormData.password);
        console.log(result);
    };

    return (
        <main className='container'>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor='name'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={loginFormData.email}
                        onChange={handleChangeLogin}
                    />

                    <label htmlFor='email'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={loginFormData.password}
                        onChange={handleChangeLogin}
                    />

                    <button type='submit'>Submit</button>
                </form>
            </div>

            <div>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor='name'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={registerFormData.email}
                        onChange={handleChangeRegister}
                    />

                    <label htmlFor='email'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={registerFormData.password}
                        onChange={handleChangeRegister}
                    />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </main>
    );
};

export default Login;
