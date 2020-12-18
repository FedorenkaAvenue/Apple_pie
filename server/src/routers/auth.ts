import { Router } from 'express';

import refreshTokenController from '@controllers/auth/refresh';
import signOutController from '@controllers/auth/signOut';

const router = Router();

router.get('/refresh', refreshTokenController);
router.get('/signout', signOutController);

export default router;
