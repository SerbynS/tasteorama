import { Router } from 'express';

import { authenticate } from '../middlewares/authenticate.js';
import { getUserController } from '../controllers/user.controller.js';

const router = Router();

router.use('', authenticate, getUserController);

export default router;
