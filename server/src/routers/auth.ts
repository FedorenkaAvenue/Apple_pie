import { Router } from 'express';

import { signUpController } from '@controllers/auth';

const router: Router = Router();

router.post('/signup', signUpController);

export default router;
