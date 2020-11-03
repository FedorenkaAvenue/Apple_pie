import { Router } from 'express';

import { registerController } from '@controllers/auth';
// import checkAuth from '@middleware/checkAuth';

const router: Router = Router();

// router.get('/', checkAuth, authorization);
// router.get('/logout', logOut);

// router.post('/login', logIn);
router.post('/register', registerController);

export default router;
