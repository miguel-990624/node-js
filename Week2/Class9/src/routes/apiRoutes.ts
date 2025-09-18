import { Router } from 'express';
import { getTriviaController } from '../controllers/apiController.ts';

const router = Router();

router.get('/', getTriviaController);

export default router;