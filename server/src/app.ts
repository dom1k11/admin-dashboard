import express from 'express';
import cors from 'cors';
import userRoute from '../routes/users';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoute);

export default app;
