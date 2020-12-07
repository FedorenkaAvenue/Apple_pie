import { Router } from 'express';

import { getPairToken } from './controllers.js';

const router = Router();

router.post('/token_pair', getPairToken);

export default router;
