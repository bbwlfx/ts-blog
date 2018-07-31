import Router from 'koa-router';
import studioController from 'controllers/studioController.tsx';

const router = Router();

router.get('/', studioController.index);
export default router;
