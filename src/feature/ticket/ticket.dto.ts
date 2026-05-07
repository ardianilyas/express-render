import z from "zod";
import { VALIDATION_MESSAGE } from "./constants/validation-message";

export const createTicketDto = z.object({
  title: z.string({ error: VALIDATION_MESSAGE.title.string }).min(1, { error: VALIDATION_MESSAGE.title.required }),
  description: z.string({ error: VALIDATION_MESSAGE.description.required }).min(1, { error: VALIDATION_MESSAGE.description.required }),
});

export const updateTicketDto = z.object({
  title: z.string({ error: VALIDATION_MESSAGE.title.string }).min(1, { error: VALIDATION_MESSAGE.title.required }),
  description: z.string({ error: VALIDATION_MESSAGE.description.required }).min(1, { error: VALIDATION_MESSAGE.description.required }),
});

export type CreateTicketDto = z.infer<typeof createTicketDto>;
export type UpdateTicketDto = z.infer<typeof updateTicketDto>;
