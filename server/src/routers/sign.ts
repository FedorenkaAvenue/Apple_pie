import { Router } from 'express';

import signUpEmailController from '@controllers/sign/up/email';
import signUpGoogleController from '@controllers/sign/up/google';
import signUpFacebookController from '@controllers/sign/up/facebook';
import signInEmailController from '@controllers/sign/in/email';
import signInGoogleController from '@controllers/sign/in/google';
import signInFacebookController from '@controllers/sign/in/facebook';
import signOutController from '@controllers/sign/signOut';

const router = Router();
const signUpRouter = Router();
const signInRouter = Router();

signUpRouter
    .post('/google', signUpGoogleController)
    .post('/facebook', signUpFacebookController)
    .post('/email', signUpEmailController);

signInRouter
    .post('/google', signInGoogleController)
    .post('/email', signInEmailController)
    .post('/facebook', signInFacebookController)

router
    .use('/up', signUpRouter)
    .use('/in', signInRouter)
    .get('/out', signOutController);

export default router;
