import { db } from "../../db";
import { tickets } from "../../db/schema";
import { CreateTicketDto } from "./ticket.dto";

export class TicketService {
  async getAllTickets() {
    return await db.select().from(tickets);
  }

  async createTicket(data: CreateTicketDto) {
    const ticket = await db.insert(tickets).values(data).returning();
    return ticket[0];
  }
}