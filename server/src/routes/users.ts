import { Router } from 'express';
import {
  handleDelete,
  handleGetUsers,
  handleDeleteUnverified,
  handleBlockUsers,
  handleUnblockUsers
} from '../controllers/UserController';

const router = Router();

router.get('/users', handleGetUsers);
router.delete('/users', handleDelete);
router.delete('/unverified', handleDeleteUnverified);
router.patch('/block', handleBlockUsers);   
router.patch('/unblock', handleUnblockUsers);

export default router;
