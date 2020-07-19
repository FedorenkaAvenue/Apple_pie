import { Router } from 'express';

import { register } from '@controllers/auth';

const router: Router = Router();
//@ts-ignore
router.post('/register', register);

export default router;
