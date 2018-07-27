import Router from 'koa-router';
import demoController from 'controllers/demoController.tsx';

const router = Router();

router.get('/', demoController.index);
export default router;
