import { registerHealthModule } from '../../modules/health/di';

export function registerAllModules() {
  registerHealthModule();
}
