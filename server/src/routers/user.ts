import { Router } from 'express';

import existController from '@controllers/user/exist';

const router: Router = Router();

router.get('/exist', existController); // check existed user's data

export default router;
