import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

//App config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

//App Middleware
app.use(express.json());
app.use(cors());

//App endpoint

app.use('/api/user', userRouter);
app.get('/', (req, res) => {
	res.send('Api Working just fine guys');
});

app.listen(port, () => console.log(`server running on port ${port}`));
