import { assets } from '../assets/assets';
const Footer = () => {
	return (
		<div>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
				<div>
					<img className='w-32 mb-5' src={assets.logo} alt='' />
					<p className='w-full md:w-3/4 text-gray-600'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
				</div>
				<div>
					<p className='text-xl font-medium mb-5'>Company</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div>
					<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>+44 774 576 89</li>
						<li>jally34KE@gmail.com</li>
					</ul>
				</div>
			</div>
			<div>
				<hr />
				<p className='py-5 text-center text-sm'>copyright 2024@ BrevianKE. All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
