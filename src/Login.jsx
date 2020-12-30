import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { auth, provider } from './firebase.js';
import './Login.css';

const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPasword ] = useState('');

	const signIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lVYcpP1zOPbBuPmxKiS6saEdXGNyzdnbw&usqp=CAU"
					alt=""
				/>
			</div>
			<Button onClick={signIn}>Sign in</Button>
		</div>
	);
};

export default Login;
