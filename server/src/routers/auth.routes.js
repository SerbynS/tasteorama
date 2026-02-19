import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { loginUserSchema, registerUserSchema } from '../validation/auth.js';

import {
  registerUserController,
  loginUserController,
  refreshUserSessionController,
} from '../controllers/auth.controller.js';

import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post(
  '/refresh',
  authenticate,
  ctrlWrapper(refreshUserSessionController),
);

export default router;
