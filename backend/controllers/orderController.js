import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

//placing order using cash on delivery(COD)
const placeOrderCash = async (req, res) => {
	try {
		const { userId, items, amount, address } = req.body;
		const orderData = {
			userId,
			items,
			amount,
			address,
			payment_method: 'COD',
			payment: false,
			date: Date.now(),
		};

		const newOrder = new orderModel(orderData);
		await newOrder.save();
		await userModel.findByIdAndUpdate(userId, { cartData: {} });
		res.json({ success: true, message: 'Order placed' });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};
//placing order using Stripe method
const placeOrderStripe = async (req, res) => {};
//placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {};

//all orders data  for Admin panel
const allOrders = async (req, res) => {
	try {
		const orders = await orderModel.find({});
		res.json({ success: true, orders });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};
//all orders data  for Fronted users
const userOrders = async (req, res) => {
	try {
		const { userId } = req.body;
		const orders = await orderModel.find({ userId });
		res.json({ success: true, orders });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};
//updating order status from Admin panel
const updateStatus = async (req, res) => {
	try {
		const { orderId, status } = req.body;
		await orderModel.findByIdAndUpdate(orderId, { status });
		res.json({ success: true, message: 'Status Updated' });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

export { placeOrderCash, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };
