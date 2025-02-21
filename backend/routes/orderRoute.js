import express from 'express';
import { placeOrderCash, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/cartAuth.js';

const orderRouter = express.Router();

//Admin features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

//payment features
orderRouter.post('/cash', authUser, placeOrderCash);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);

//verify payment
orderRouter.post('/verifystripe', authUser, verifyStripe);

// user feature
orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;
