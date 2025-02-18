import express from 'express';
import { addToCart, getUserCartData, updateUserCart } from '../controllers/cartController.js';
import authUser from '../middleware/cartAuth.js';

const cartRouter = express.Router();
cartRouter.post('/addtocart', authUser, addToCart);
cartRouter.post('/updatecart', authUser, updateUserCart);
cartRouter.post('/getusercart', authUser, getUserCartData);

export default cartRouter;
