import z from "zod";

export const createTicketDto = z.object({
  title: z.string({ error: "Title must be a string" }).min(1, { error: "Title is required" }),
  description: z.string({ error: "Description must be a string" }).min(1, { error: "Description is required" }),
});

export type CreateTicketDto = z.infer<typeof createTicketDto>;
