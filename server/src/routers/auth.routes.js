import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { loginUserSchema, registerUserSchema } from '../validation/auth.js';

import {
  registerUserController,
  loginUserController,
  refreshUserSessionController,
  logoutUserController,
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

router.post('/logout', authenticate, ctrlWrapper(logoutUserController));

export default router;
