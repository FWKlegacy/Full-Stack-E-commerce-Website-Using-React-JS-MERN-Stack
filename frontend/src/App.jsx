import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
const App = () => {
	return (
		<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/collection' element={<Collection />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/product/:productId' element={<Product />} />
				<Route path='/login' element={<Login />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='/placeorder' element={<PlaceOrder />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
