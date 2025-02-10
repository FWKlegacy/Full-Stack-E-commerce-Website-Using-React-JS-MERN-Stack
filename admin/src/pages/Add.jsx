import { useState } from 'react';
import { assets } from '../assets/assets';

const Add = () => {
	const [image1, setImage1] = useState(false);
	const [image2, setImage2] = useState(false);
	const [image3, setImage3] = useState(false);
	const [image4, setImage4] = useState(false);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('M');
	const [subCategory, setSubCategory] = useState('Topwear');
	const [bestseller, setBestseller] = useState(false);
	const [sizes, setSizes] = useState([]);

	return (
		<form className='flex-flex-col items-start w-full gap-3'>
			<div>
				<p className='mb-2 '>Upload Image</p>
				<div className='flex gap-2'>
					<label htmlFor='image1'>
						<img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='' />
						<input onChange={e => setImage1(e.target.files[0])} type='file' id='image1' hidden />
					</label>
					<label htmlFor='image2'>
						<img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
						<input onChange={e => setImage2(e.target.files[0])} type='file' id='image2' hidden />
					</label>
					<label htmlFor='image3'>
						<img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
						<input onChange={e => setImage3(e.target.files[0])} type='file' id='image3' hidden />
					</label>
					<label htmlFor='image4'>
						<img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' />
						<input onChange={e => setImage4(e.target.files[0])} type='file' id='image4' hidden />
					</label>
				</div>
			</div>
			<div className='w-full'>
				<p className='mb-2'>Product Name</p>
				<input className='w-full px-3 py-2 max-w-[400px]' type='text' placeholder='type here' required />
			</div>
			<div className='w-full'>
				<p className='mb-2'>Product description</p>
				<textarea className='w-full px-3 py-2 max-w-[400px]' type='text' placeholder='write content here' required />
			</div>
			<div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
				<div>
					<p className='mb-2'>Product category</p>
					<select className='w-full px-3 py-2'>
						<option value='Men'>Men</option>
						<option value='Women'>Women</option>
						<option value='Kids'>Kids</option>
					</select>
				</div>
				<div>
					<p className='mb-2'>Sub category</p>
					<select className='w-full px-3 py-2'>
						<option value='Topwear'>Topwear</option>
						<option value='Bottomwear'>Bottomwear</option>
						<option value='Winterwear'>Winterwear</option>
					</select>
				</div>
				<div>
					<p className='mb-2'>Product price</p>
					<input className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='25' />
				</div>
			</div>
			<div>
				<p className='mb-2'>Product sizes</p>
				<div className='flex gap-3'>
					<div>
						<p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
					</div>
					<div>
						<p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
					</div>
					<div>
						<p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
					</div>
					<div>
						<p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
					</div>
					<div>
						<p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
					</div>
				</div>
			</div>
			<div className='flex gap-2 mt-2'>
				<input type='checkbox' id='bestseller' />
				<label className='cursor-pointer' htmlFor='bestseller'>
					Add to bestseller
				</label>
			</div>
			<button className='bg-black text-white mt-4 py-3 w-28' type='submit'>
				ADD
			</button>
		</form>
	);
};

export default Add;
