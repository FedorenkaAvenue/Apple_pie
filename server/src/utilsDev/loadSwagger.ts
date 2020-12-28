import { serve, setup } from 'swagger-ui-express';
import { load } from 'yamljs';

import app from '@src/app';

app.use('/api/docs', serve, setup(load('swagger.yaml')));
