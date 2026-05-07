import { eq } from "drizzle-orm";
import { db } from "../../db";
import { tickets } from "../../db/schema";
import { CreateTicketDto, UpdateTicketDto } from "./ticket.dto";
import { NotFoundError } from "../../shared/errors/http-error";

const TICKET_NOT_FOUND = 'Ticket not found';

export class TicketService {
  async getAllTickets() {
    return await db.select().from(tickets);
  }

  async getTicketById(id: string) {
    const [ticket] = await db.select().from(tickets).where(eq(tickets.id, id));

    if (!ticket) {
      throw new NotFoundError(TICKET_NOT_FOUND);
    }

    return ticket;
  }

  async createTicket(data: CreateTicketDto) {
    const ticket = await db.insert(tickets).values(data).returning();
    return ticket[0];
  }

  async updateTicket(id: string, data: UpdateTicketDto) {
    const [ticket] = await db.update(tickets).set(data).where(eq(tickets.id, id)).returning();

    if (!ticket) {
      throw new NotFoundError(TICKET_NOT_FOUND);
    }

    return ticket;
  }

  async deleteTicket(id: string) {
    const [ticket] = await db.delete(tickets).where(eq(tickets.id, id)).returning();

    if (!ticket) {
      throw new NotFoundError(TICKET_NOT_FOUND);
    }

    return;
  }
}