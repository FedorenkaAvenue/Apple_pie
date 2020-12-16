import { Router } from 'express';

import sketchList from '@controllers/artist/sketchList';

const router: Router = Router();

router.get('/sketchlist', sketchList);

export default router;
