import express from "express"
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { healthModule } from "./modules/health";

import { registerAllModules } from "./shared/di";

registerAllModules()

const app = express()

app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(compression());

app.use('/api', healthModule.route);

export default app