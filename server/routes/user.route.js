import express from 'express';
import {
  user,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../lib/verifyUser.js';

const router = express.Router();

router.get('/', user);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;
