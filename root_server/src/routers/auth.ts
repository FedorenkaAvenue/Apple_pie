import { Router } from 'express';

import signUpController from '@controllers/auth/signUp';
import logInController from '@controllers/auth/logIn';
import logOutController from '@controllers/auth/logOut';

const router: Router = Router();

router.post('/signup', signUpController);
router.post('/login', logInController);
router.get('/logout', logOutController);

export default router;
