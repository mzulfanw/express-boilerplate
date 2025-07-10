import router from './routes/health.routes';
import { registerHealthModule } from './di';

export const healthModule = {
  path: '/health',
  route: router,
  register: registerHealthModule,
};
