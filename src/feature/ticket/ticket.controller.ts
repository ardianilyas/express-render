import { Request, Response } from "express";

export class TicketController {
  getAllTickets = (_req: Request, res: Response) => {
    res.send("Get all tickets");
  }
}