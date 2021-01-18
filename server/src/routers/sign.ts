import { Router } from 'express';

import signUpEmailController from '@controllers/sign/up/email';
import signUpGoogleController from '@controllers/sign/up/google';
import signUpFacebookController from '@controllers/sign/up/facebook';
import signInEmailController from '@controllers/sign/in/email';
import signInGoogleController from '@controllers/sign/in/google';
import signInFacebookController from '@controllers/sign/in/facebook';
import signOutController from '@controllers/sign/signOut';
import _signUpEndPointController from '@controllers/sign/up/_endPoint';
import _signInEndPointController from '@controllers/sign/in/_endPoint';

const router = Router();
const signUpRouter = Router();
const signInRouter = Router();

signUpRouter
    .post('/google', signUpGoogleController)
    .post('/facebook', signUpFacebookController)
    .post('/email', signUpEmailController)
    .use(_signUpEndPointController);

signInRouter
    .post('/google', signInGoogleController)
    .post('/email', signInEmailController)
    .post('/facebook', signInFacebookController)
    .use(_signInEndPointController);

router
    .use('/up', signUpRouter)
    .use('/in', signInRouter)
    .get('/out', signOutController);

export default router;
