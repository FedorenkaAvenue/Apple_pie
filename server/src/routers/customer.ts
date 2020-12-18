import { Router } from 'express';

import appList from '@controllers/customer/appList';
// import addApplication from '@controllers/customer/addApplication';

const router: Router = Router();

router.get('/applist', appList);
// router.post('/addapp', addApplication);

export default router;
