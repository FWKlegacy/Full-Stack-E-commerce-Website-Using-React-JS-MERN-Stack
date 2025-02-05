import { assets } from '../assets/assets';
import Title from '../components/Title';
const About = () => {
	return (
		<div>
			<div className='text-center text-2xl pt-8 border-t'>
				<Title text1={'ABOUT '} text2={'US'} />
			</div>
			<div className='flex flex-col md:flex-row gap-16 my-10'>
				<img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
				<div className='flex flex-col justify-center gap-6 md-w-2/4 text-gray-600'>
					<p>Our company can produce various kinds of garment, in various styles, across three categories which includes – flat-knit sweaters, outerwear jackets and circular knit t-shirts, sweatshirts & joggers, among which are, apparels for Men, Women , Kids and Babywear with a total capacity that reaches 12,00,000 , 2,50,000 & 10,00,000 pieces respectively, per annum.</p>
					<p>In producing high quality products, our company is supported by sophisticated technology and framework, which is helped by manpower and a capable and appressed team of experts who have helped us gain a local dominance over our field of expertise.</p>
					<b className='text-gray-800'>Our Mission</b>
					<p>To innovate, to lead, to enhance, to provide best-value products and services to global customers.To make a difference through our branding to stay ahead of fashion trends, market changes and the latest technology.</p>
				</div>
			</div>
			<div className='text-xl py-4'>
				<Title text1={'WHY '} text2={'CHOOSE US'} />
			</div>
			<div className='flex flex-col md:flex-row text-sm mb-20'>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Quality Assurance:</b>
					<p className='text-gray-600'>To enhance the quality of life for our business partners,customers and employees</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Convinience:</b>
					<p className='text-gray-600'>We strive to be a caring and well-managed organization for our business partners ,customers and employees, and a responsible corporate citizen to our society.</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Exeptional Customer Service:</b>
					<p className='text-gray-600'>ToWe strive to be a global leader in fashion-knit and fashion outerwear by empowering innovation and design to provide total customer satisfaction.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
