import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const PlaceOrder = () => {
	const [method, setMethod] = useState('COD');
	const { token, navigate, cartItems, setCartItems, backendUrl, delivery_fee, getCartAmount, products } = useContext(ShopContext);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
		country: '',
		phone: '',
	});

	const onchangeHandler = e => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData(data => ({ ...data, [name]: value }));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			let orderItems = [];

			for (const items in cartItems) {
				for (const item in cartItems[items]) {
					if (cartItems[items][item] > 0) {
						const itemInfo = structuredClone(products.find(product => product._id === items));
						if (itemInfo) {
							itemInfo.size = item;
							itemInfo.quantity = cartItems[items][item];
							orderItems.push(itemInfo);
						}
					}
				}
				let orderData = {
					address: formData,
					items: orderItems,
					amount: getCartAmount() + delivery_fee,
				};

				switch (method) {
					//api call fro cash on delivery method
					case 'COD': {
						const response = await axios.post(backendUrl + '/api/order/cash', orderData, { headers: { token } });
						if (response.data.success) {
							setCartItems({});
							navigate('/orders');
						} else {
							toast.error(response.data.messsage);
						}
						break;
					}
					default:
						break;
				}
			}
		} catch (error) {
			console.log(error);
			toast.error(error.messsage);
		}
	};
	return (
		<form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
			{/*...........left side............. */}
			<div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
				<div className='text-xl my-3 sm:text-2xl'>
					<Title text1={'DELIVERY '} text2={'INFORMATON'} />
				</div>
				<div className='flex gap-3'>
					<input required onChange={onchangeHandler} name='firstName' value={formData.firstName} type='text' placeholder='first Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
					<input required onChange={onchangeHandler} name='lastName' value={formData.lastName} type='text' placeholder='last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
				</div>
				<input required onChange={onchangeHandler} name='email' value={formData.email} type='email' placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
				<input required onChange={onchangeHandler} name='street' value={formData.street} type='text' placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
				<div className='flex gap-3'>
					<input required onChange={onchangeHandler} name='city' value={formData.city} type='text' placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
					<input required onChange={onchangeHandler} name='state' value={formData.state} type='text' placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
				</div>
				<div className='flex gap-3'>
					<input required onChange={onchangeHandler} name='zipCode' value={formData.zipCode} type='number' placeholder='ZipCode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
					<input required onChange={onchangeHandler} name='country' value={formData.country} type='text' placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
				</div>
				<input required onChange={onchangeHandler} name='phone' value={formData.phone} type='number' placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
			</div>
			{/*...........right side............. */}
			<div className='mt-8'>
				<div className='mt-8 min-w-80'>
					<CartTotal />
				</div>
				<div className='mt-12'>
					<Title text1={'PAYMENT '} text2={'METHOD'} />
					{/*...........payment method selection............. */}
					<div className='flex gap-3 flex-col lg:flex-row'>
						<div onClick={() => setMethod('Stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
							<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Stripe' ? 'bg-green-400' : ''}`}></p>
							<img className='h-5 mx-4' src={assets.stripe_logo} alt='' />
						</div>
						<div onClick={() => setMethod('Razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
							<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Razorpay' ? 'bg-green-400' : ''}`}></p>
							<img className='h-5 mx-4' src={assets.razorpay_logo} alt='' />
						</div>
						<div onClick={() => setMethod('COD')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
							<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? 'bg-green-400' : ''}`}></p>
							<p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
						</div>
					</div>
					<div className='w-full text-end mt-8'>
						<button type='submit' className='bg-black text-white text-sm py-3 px-14'>
							PLACE ORDER
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default PlaceOrder;
