import { Router } from 'express';

import existController from '@controllers/user/exist';
import verifyEmailController from '@controllers/user/verifyEmail';

const router: Router = Router();

router.get('/exist', existController);
router.get('/verify', verifyEmailController);

export default router;
