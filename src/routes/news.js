import express from 'express';
const router = express.Router();
import newsController from "../app/controllers/NewsController.js";

// News routes
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
