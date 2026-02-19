import { Router } from 'express';
import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);

export default router;
