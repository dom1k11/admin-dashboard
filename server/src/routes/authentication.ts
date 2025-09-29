import { Router } from 'express';
import { handleRegister } from '../controllers/RegisterController';
import { handleVerify } from '../controllers/VerifyController';
import { handleLogin } from '../controllers/loginController';
const router = Router();

router.post('/register', handleRegister);
router.get("/verify/:token", handleVerify)
router.post("/login", handleLogin)
export default router;
