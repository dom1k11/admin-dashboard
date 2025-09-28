import { Router } from 'express';
import { handleDeleteUsers, handleGetUsers } from '../controllers/UserController';

const router = Router();

router.get('/users', handleGetUsers);
router.delete('/users', handleDeleteUsers)

export default router;
