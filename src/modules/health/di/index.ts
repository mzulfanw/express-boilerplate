import { container } from 'tsyringe';
import { HealthController } from '../controllers/health.controller';

export function registerHealthModule() {
  container.registerSingleton<HealthController>('HealthController', HealthController);
}
