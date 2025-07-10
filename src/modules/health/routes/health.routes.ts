import { Router } from 'express';
import { container } from 'tsyringe';
import { HealthController } from '../controllers/health.controller';

const router = Router();
const controller = container.resolve(HealthController);

router.get('/health-check', controller.check);

export default router;
