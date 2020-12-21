import { Router } from 'express';

import applListController from '@controllers/customer/applList';
import addApplicationController from '@controllers/customer/addApplication';
import { memoryStorageFileUpload } from '@middleWares/parseFormDataFiles';

const router: Router = Router();

router.get('/applist', applListController);
router.post('/application', memoryStorageFileUpload(), addApplicationController);

export default router;
