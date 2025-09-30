import express from 'express';
import cors from 'cors';
import userRoute from './routes/users';
import authRoute from './routes/authentication';
import { authMiddleware } from './middlewares/authMiddleware';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);

app.use(authMiddleware);
app.use('/', userRoute);

export default app;
