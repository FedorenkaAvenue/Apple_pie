import { Router } from 'express';

import sketchListController from '@controllers/artist/sketchList';

const router: Router = Router();

router.get('/sketchlist', sketchListController);

export default router;
