import { Router } from 'express';

import { refreshToken } from '@controllers/auth/refresh';

const router = Router();

router.get('/refresh', refreshToken);

export default router;
