import { NextFunction, Request, Response } from "express";
import { validate } from "../../shared/utils/validate";
import { createTicketDto, updateTicketDto } from "./ticket.dto";
import { TicketService } from "./ticket.service";
import { sendSuccess } from "../../shared/utils/response";
import { HTTP_STATUS_CODE } from "../../shared/constants/http-status-code";

export class TicketController {
  constructor(private ticketService: TicketService) {}

  getAllTickets = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tickets = await this.ticketService.getAllTickets();
      return sendSuccess(res, HTTP_STATUS_CODE.OK, 'Tickets fetched', tickets);
    } catch (error) {
      next(error);      
    }
  }

  getTicketById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ticket = await this.ticketService.getTicketById(req.params.id as string);
      return sendSuccess(res, HTTP_STATUS_CODE.OK, "Ticket fetched", ticket)
    } catch (error) {
      next(error);
    }
  }

  createTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = validate(createTicketDto, req.body);
      const ticket = await this.ticketService.createTicket(data);
      return sendSuccess(res, HTTP_STATUS_CODE.CREATED, "Ticket created", ticket);
    } catch (error) {
      next(error);
    }
  }

  updateTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = validate(updateTicketDto, req.body);
      const ticket = await this.ticketService.updateTicket(req.params.id as string, data);
      return sendSuccess(res, HTTP_STATUS_CODE.OK, "Ticket updated", ticket);
    } catch (error) {
      next(error);
    }
  }

  deleteTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.ticketService.deleteTicket(req.params.id as string);
      return sendSuccess(res, HTTP_STATUS_CODE.OK, "Ticket deleted");
    } catch (error) {
      next(error);
    }
  }
}
