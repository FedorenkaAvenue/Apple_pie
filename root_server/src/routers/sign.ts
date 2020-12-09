import { Router } from 'express';

import signUpController from '@controllers/sign/signUp';
// import signInController from '@controllers/sign/signIn';
// import signOutController from '@controllers/sign/signOut';

const router: Router = Router();

router.post('/signup', signUpController);
// router.post('/sign_in', signInController);
// router.get('/sign_out', signOutController);

export default router;
