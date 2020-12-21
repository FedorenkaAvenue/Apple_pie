import { Router } from 'express';

import signUpController from '@controllers/sign/signUp';
import signInController from '@controllers/sign/signIn';
import signOutController from '@controllers/sign/signOut';

const router: Router = Router();

router.post('/signup', signUpController);
router.post('/signin', signInController);
router.get('/signout', signOutController);

export default router;
