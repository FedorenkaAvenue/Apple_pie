import { Router } from 'express';

import appList from '@controllers/customer/appList';

const router: Router = Router();

router.get('/applist', appList);

export default router;
