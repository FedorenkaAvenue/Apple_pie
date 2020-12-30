import { Router } from 'express';

import existController from '@controllers/user/exist';
import verifyEmailController from '@controllers/user/verifyEmail';
import ownProfile from '@controllers/user/ownProfile';
import checkAuth from '@middleWares/checkAuth';

const router: Router = Router();

router
    .get('/exist', existController)
    .get('/verify', verifyEmailController)
    .get('/profile', checkAuth, ownProfile);

export default router;
