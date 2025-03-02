import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
	const [currState, setCurrState] = useState('Login');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

	const onSubmitHandler = async e => {
		e.preventDefault();
		try {
			if (currState === 'Sign Up') {
				const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });

				if (response.data.success) {
					setToken(response.data.token);
					localStorage.setItem('token', response.data.token);
				} else {
					toast.error(response.data.message);
				}
			} else {
				const response = await axios.post(backendUrl + '/api/user/login', { email, password });
				if (response.data.success) {
					setToken(response.data.token);
					localStorage.setItem('token', response.data.token);
				} else {
					toast.error(response.data.message);
				}
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, [token]);
	return (
		<form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' onSubmit={onSubmitHandler}>
			<div className='inline-flex items-center gap-2 mb-2 mt-10'>
				<p className='text-3xl prata-regular'>{currState}</p>
				<hr className='border-none w-8 h-[1.5px] bg-gray-800' />
			</div>
			{currState === 'Sign Up' ? <input onChange={e => setName(e.target.value)} className='w-full px-3 py-2 border border-gray-800' type='text' placeholder='Name' value={name} /> : ''}
			<input onChange={e => setEmail(e.target.value)} className='w-full px-3 py-2 border border-gray-800' type='email' placeholder='Email' value={email} required />
			<input onChange={e => setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800' type='password' placeholder='Password' value={password} required />
			<div className='w-full flex justify-between text-sm mt-[-8px]'>
				{currState === 'Sign Up' ? <p className='cursor-pointer'>Already have an Account ?</p> : <p className='cursor-pointer'>Doesnt have an Account?</p>}
				{currState === 'Login' ? (
					<p className='cursor-pointer' onClick={() => setCurrState('Sign Up')}>
						Create Account
					</p>
				) : (
					<p className='cursor-pointer' onClick={() => setCurrState('Login')}>
						Login Here
					</p>
				)}
			</div>
			<button className='bg-black text-white py-2 px-8 font-light mt-4'>{currState === 'Sign Up' ? 'Sign Up' : 'Sign In'}</button>
		</form>
	);
};

export default Login;
