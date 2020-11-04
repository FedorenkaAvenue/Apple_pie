import { Router } from 'express';

import signUpController from '@controllers/auth/signUp';
import logInController from '@controllers/auth/logIn';

const router: Router = Router();

router.post('/signup', signUpController);
router.post('/login', logInController);

export default router;
