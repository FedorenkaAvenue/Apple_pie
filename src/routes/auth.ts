import express from 'express';

import { login } from '../controllers/auth';

const router: any = express.Router();
router.post('/login', login);

export default router;
