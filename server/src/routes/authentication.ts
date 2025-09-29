import { Router } from 'express';
import { handleRegister } from '../controllers/RegisterController';
import { handleVerify } from '../controllers/verifyController';

const router = Router();

router.post('/register', handleRegister);
router.get("/verify/:token", handleVerify)
export default router;
