import { Router } from 'express';

import { registrationController } from '@controllers/auth';
// import checkAuth from '@middleware/checkAuth';

const router: Router = Router();

// router.get('/', checkAuth, authorization);
// router.get('/logout', logOut);

// router.post('/login', logIn);
router.post('/reg', registrationController);

export default router;
