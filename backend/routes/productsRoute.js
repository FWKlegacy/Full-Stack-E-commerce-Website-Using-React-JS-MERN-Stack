import express from 'express';
import { addProduct, listProduct, removeProduct, singleProductInfo } from '../controllers/productsContoller.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productsRouter = express.Router();

productsRouter.post(
	'/addproduct',
	adminAuth,
	upload.fields([
		{ name: 'image1', maxCount: 1 },
		{ name: 'image2', maxCount: 1 },
		{ name: 'image3', maxCount: 1 },
		{ name: 'image4', maxCount: 1 },
	]),
	addProduct
);
productsRouter.post('/removeproduct', adminAuth, removeProduct);
productsRouter.get('/listproduct', listProduct);
productsRouter.post('/singleproduct', singleProductInfo);

export default productsRouter;
