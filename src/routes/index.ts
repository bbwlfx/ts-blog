import Router from "koa-router";
import homeController from "controllers/homeController";

const router = Router();

router.get("/", homeController.index);
router.get("/demo", homeController.demo);

export default router;
