import { Router } from 'express';

import existController from '@controllers/user/exist';
import verifyEmailController from '@controllers/user/verifyEmail';
import profileController from '@controllers/user/profile';
import ownProfileController from '@controllers/user/ownProfile';
import ownProfilePreviewController from '@controllers/user/ownProfilePreview';
import checkAuth from '@middleWares/checkAuth';

const router: Router = Router();

router
    .get('/exist', existController)
    .get('/verify', verifyEmailController)
    .get('/profile/:id', profileController)
    .get('/profile', checkAuth, ownProfileController)
    .get('/preview', checkAuth, ownProfilePreviewController);

export default router;
