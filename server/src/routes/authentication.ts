import { Router } from 'express';
import { handleRegister } from '../controllers/AuthController';

const router = Router();

router.post('/register', handleRegister);

export default router;
