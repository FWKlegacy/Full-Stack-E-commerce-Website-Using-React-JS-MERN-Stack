import { assets } from '../assets/assets';
const OurPolicy = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
			<div>
				<img className='m-auto w-12 mb-5' src={assets.exchange_icon} alt='' />
				<p className='font-semibold'>Easy Exchange Policy</p>
				<p className='text-gray-400'>We offer hassle free Exchange Policy</p>
			</div>
			<div>
				<img className='m-auto w-12 mb-5' src={assets.quality_icon} alt='' />
				<p className='font-semibold'>7 days Return Policy</p>
				<p className='text-gray-400'>We offer 7 days free return Policy</p>
			</div>
			<div>
				<img className='m-auto w-12 mb-5' src={assets.support_img} alt='' />
				<p className='font-semibold'>Best Customer Support</p>
				<p className='text-gray-400'>We offer quality customer support</p>
			</div>
		</div>
	);
};

export default OurPolicy;
