import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/errors/app-error';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.details ?? null,
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
}