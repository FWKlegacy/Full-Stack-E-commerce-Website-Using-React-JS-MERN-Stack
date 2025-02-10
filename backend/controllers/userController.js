import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Route for user login
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await userModel.findOne({ email });
		if (!user) {
			return res.json({ success: false, message: 'user does not exist' });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (isMatch) {
			const token = createToken(user._id);
			res.json({ success: true, token });
		} else {
			return res.json({ success: false, message: 'invalid credentials' });
		}
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

//Route for user Registeration
const userRegister = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		//checking if user already exists
		const userExists = await userModel.findOne({ email });
		if (userExists) {
			return res.json({ success: false, message: 'User Already exists' });
		}
		//validating email format and strong password
		if (!validator.isEmail(email)) {
			return res.json({ success: false, message: 'Please enter valid email' });
		}
		if (password.length < 8) {
			return res.json({ success: false, message: 'Please enter a strong password' });
		}
		//hashing user password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		//creating new user
		const newUser = new userModel({
			name,
			email,
			password: hashedPassword,
		});

		const user = await newUser.save();
		const token = createToken(user._id);
		res.json({ success: true, token });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

//Route for Admin login

const adminLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
			const token = jwt.sign(email + password, process.env.JWT_SECRET);
			res.json({ success: true, token });
		} else {
			res.json({ success: false, message: 'invalid credentials' });
		}
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

export { loginUser, userRegister, adminLogin };
