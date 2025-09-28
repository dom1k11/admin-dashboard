import { Router } from 'express';
import {
  handleDelete,
  handleGetUsers,
  handleDeleteUnverified,
} from '../controllers/UserController';

const router = Router();

router.get('/users', handleGetUsers);
router.delete('/users', handleDelete);
router.delete('/unverified', handleDeleteUnverified);
export default router;
