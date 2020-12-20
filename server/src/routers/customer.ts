import { Router } from 'express';

import appListController from '@controllers/customer/appList';
import addApplicationController from '@controllers/customer/addApplication';
import { memoryStorageFileUpload } from '@middleWares/parseFormDataFiles';

const router: Router = Router();

router.get('/applist', appListController);
router.post('/application', memoryStorageFileUpload(), addApplicationController);

export default router;
