import { Router } from 'express';

import signUpEmailController from '@controllers/sign/up/email';
import signUpSocController from '@controllers/sign/up/cosial';

import signInEmailController from '@controllers/sign/in/email';

import signOutController from '@controllers/sign/signOut';

const router: Router = Router();

router
    .post('/up/soc', signUpSocController)
    .post('/up', signUpEmailController)
    .post('/in', signInEmailController)
    .get('/out', signOutController);

export default router;
