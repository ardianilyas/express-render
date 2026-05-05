import { Router } from "express";
import { TicketController } from "./ticket.controller";

const router = Router();

const ticketController = new TicketController();

router.get("/", ticketController.getAllTickets);

export default router;
