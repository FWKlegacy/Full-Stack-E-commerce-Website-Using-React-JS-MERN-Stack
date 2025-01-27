const NewsLetterBox = () => {
	const OnSubmitHandler = e => {
		e.preventDefault();
	};
	return (
		<div className='text-center'>
			<p className='font font-medium text-2xl text-gray-800'>Subscribe now and get 20% off</p>
			<p className='mt-3 text-gray-400'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
			<form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6  border pl-3'>
				<input className='outline-none w-full sm-flex-1' type='email' placeholder='Enter your email' required />
				<button className='bg-black text-white px-10 py-4 text-xs' type='submit'>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default NewsLetterBox;
