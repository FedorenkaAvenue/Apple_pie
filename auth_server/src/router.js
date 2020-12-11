import { Router } from 'express';

import { signUp, refreshToken } from './controllers.js';

const router = Router();

router.post('/signup', signUp);
router.get('/refresh', refreshToken);

export default router;
