import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {
	const { products } = useContext(ShopContext);
	const [showFilter, setShowFilter] = useState(false);
	const [filterProducts, setFilterProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [subCategory, setSubCategory] = useState([]);

	const toggleCategory = e => {
		if (category.includes(e.target.value)) {
			setCategory(prev => prev.filter(item => item !== e.target.value));
		} else {
			setCategory(prev => [...prev, e.target.value]);
		}
	};

	const toggleSubCategory = e => {
		if (subCategory.includes(e.target.value)) {
			setSubCategory(prev => prev.filter(item => item !== e.target.value));
		} else {
			setSubCategory(prev => [...prev, e.target.value]);
		}
	};

	const applyFilter = () => {
		let productsCopy = products.slice();
		if (category.length > 0) {
			productsCopy = productsCopy.filter(item => category.includes(item.category));
		}
		setFilterProducts(productsCopy);
	};

	useEffect(() => {
		setFilterProducts(products);
	}, []);

	useEffect(() => {
		applyFilter();
	}, [category, subCategory]);

	return (
		<div className=' flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
			{/*filter options */}
			<div className='min-w-60'>
				<p onClick={() => setShowFilter(!showFilter)} className='flex items-center cursor-pointer gap-2 my-2 text-xl'>
					FILTERS <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
				</p>
				{/*category fiter */}{' '}
				<div className={`border border-gray-500 pl-5 py-3 mt-6 sm:block ${showFilter ? '' : 'hidden'}`}>
					<p className='font-medium text-sm mb-3'>CATEGORIES</p>
					<div className='flex flex-col gap-2 text-gray-700 text-sm font-light'>
						<p className='flex gap-2'>
							<input onChange={toggleCategory} className='w-3' type='checkbox' value={'Men'} />
							Men
						</p>
						<p className='flex gap-2'>
							<input onChange={toggleCategory} className='w-3' type='checkbox' value={'Women'} />
							Women
						</p>
						<p className='flex gap-2'>
							<input onChange={toggleCategory} className='w-3' type='checkbox' value={'Kids'} />
							Kids
						</p>
					</div>
				</div>
				{/*subcategory */}
				<div className={`border border-gray-500 pl-5 py-3 my-5 sm:block ${showFilter ? '' : 'hidden'}`}>
					<p className='font-medium text-sm mb-3'>TYPE</p>
					<div className='flex flex-col gap-2 text-gray-700 text-sm font-light'>
						<p className='flex gap-2'>
							<input onChange={toggleSubCategory} className='w-3' type='checkbox' value={'TopWear'} />
							TopWear
						</p>
						<p className='flex gap-2'>
							<input onChange={toggleSubCategory} className='w-3' type='checkbox' value={'BottomWear'} />
							BottomWear
						</p>
						<p className='flex gap-2'>
							<input onChange={toggleSubCategory} className='w-3' type='checkbox' value={'WinterWear'} />
							WinterWear
						</p>
					</div>
				</div>
			</div>
			{/*right side */}
			<div className='flex-1'>
				<div className='flex justify-between sm:text-2xl mb-4 text-base'>
					<Title text1={'ALL '} text2={'COLLECTIONS'} />
					{/*product sort */}
					<select className='border-2 border-gray-300 text-sm px-2'>
						<option value='relevant'>Sort by: Relevant</option>
						<option value='low-high'>Sort by: Low to High</option>
						<option value='high-low'>Sort by: High to Low</option>
					</select>
				</div>
				{/*map products */}{' '}
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
					{filterProducts.map((item, index) => (
						<ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
