import { NextFunction, Request, Response } from "express";
import { validate } from "../../utils/validate";
import { createTicketDto } from "./ticket.dto";
import { TicketService } from "./ticket.service";

export class TicketController {
  constructor(private ticketService: TicketService) {}

  getAllTickets = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.ticketService.getAllTickets();
      res.status(201).json(data);
    } catch (error) {
      next(error);      
    }
  }

  createTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = validate(createTicketDto, req.body);

      const ticket = await this.ticketService.createTicket(data);

      res.status(201).json(ticket);
    } catch (error) {
      next(error);
    }
  }
}
