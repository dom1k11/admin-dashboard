import { Router } from 'express';
import { handleGetUsers } from '../src/controllers/UserController';

const router = Router();

router.get('/users', handleGetUsers);

export default router;
