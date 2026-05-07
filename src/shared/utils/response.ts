import { Response } from "express";

type SuccessResponse<T> = {
  success: true;
  message?: string;
  data?: T;
} 

export const sendSuccess = <T>(
  res: Response,
  statusCode: number,
  message?: string,
  data?: T
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  } satisfies SuccessResponse<T>);
} 
