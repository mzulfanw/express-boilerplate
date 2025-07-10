import { Request, Response } from 'express';
import { injectable } from 'tsyringe';

@injectable()
export class HealthController {
  check = (req: Request, res: Response): Response => {
    return res.status(200).json({
      message: 'success',
      data: 'ok',
    });
  };
}
