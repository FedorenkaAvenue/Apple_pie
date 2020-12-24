import { Router } from 'express';

import signUpController from '@controllers/sign/signUp';
import signInController from '@controllers/sign/signIn';
import signOutController from '@controllers/sign/signOut';

const router: Router = Router();

router.post('/up', signUpController);
router.post('/in', signInController);
router.get('/out', signOutController);

export default router;
