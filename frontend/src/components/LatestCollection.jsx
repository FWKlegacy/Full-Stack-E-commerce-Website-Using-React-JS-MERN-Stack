import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {
	const { products } = useContext(ShopContext);
	const [latestProducts, setLatestProducts] = useState([]);
	useEffect(() => setLatestProducts(products.slice(0, 10)), [products]);

	return (
		<div className='my-10'>
			<div className='text-center text-3xl py-8'>
				<Title text1={'LATEST '} text2={'COLLECTION'} />
				<p className='w-3/4 m-auto text-xs sm:text-sm md:text-balance text-gray-600'>Discover makeup for all at Fenty Beauty, where inclusivity isnt just a word—its the heartbeat of every product. Here, beauty lovers can shop makeup thats designed to celebrate and elevate every skin tone.</p>
			</div>
			{/*rendering products*/}
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
				{latestProducts.map((item, index) => (
					<ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
				))}
			</div>
		</div>
	);
};

export default LatestCollection;
