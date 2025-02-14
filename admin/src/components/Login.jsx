import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const submitHandler = async e => {
		try {
			e.preventDefault();
			const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
			if (response.data.success) {
				setToken(response.data.token);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};
	return (
		<div className='min-h-screen flex items-center justify-center w-full'>
			<div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
				<h1 className='mb-4 text-2xl font-bold'>Admin Panel</h1>
				<form onSubmit={submitHandler}>
					<div className='mb-3 min-w-72'>
						<p className='text-sm text-gray-700 mb-2 font-medium'>Email Address</p>
						<input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' onChange={e => setEmail(e.target.value)} type='email' placeholder='your@gmail.com' required value={email} />
					</div>
					<div className='mb-3 min-w-72'>
						<p className='text-sm text-gray-700 mb-2 font-medium'>Email Address</p>
						<input className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' onChange={e => setPassword(e.target.value)} type='password' placeholder='Enter your password' required value={password} />
					</div>
					<button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
