import { ZodType } from "zod";
import { BadRequestError } from "../errors/httpError";

export function validate<T>(schema: ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const formatted = result.error.issues.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    throw new BadRequestError('Validation Error', formatted);
  }

  return result.data;
}