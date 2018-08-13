import Router from "koa-router";
import demoController from "controllers/demoController";

const router = Router();

router.get("/demo", demoController.index);
export default router;
