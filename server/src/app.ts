import express from 'express';
import cors from 'cors';
import userRoute from './routes/users';
import authRoute from './routes/authentication';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRoute);
app.use('/auth', authRoute)

export default app;
