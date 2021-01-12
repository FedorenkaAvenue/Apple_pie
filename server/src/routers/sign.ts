import { Router } from 'express';

import signUpEmailController from '@controllers/sign/up/email';
import signUpGoogleController from '@controllers/sign/up/google';
import signInEmailController from '@controllers/sign/in/email';
import signInGoogleController from '@controllers/sign/in/google';
import signOutController from '@controllers/sign/signOut';

const router = Router();
const signUpRouter = Router();
const signInRouter = Router();

signUpRouter
    .post('/google', signUpGoogleController)
    .post('/email', signUpEmailController);

signInRouter
    .post('/google', signInGoogleController)
    .post('/email', signInEmailController)

router
    .use('/up', signUpRouter)
    .use('/in', signInRouter)
    .get('/out', signOutController);

export default router;
