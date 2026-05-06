import { Router } from "express";
import { TicketController } from "./ticket.controller";
import { TicketService } from "./ticket.service";

const router = Router();

const ticketService = new TicketService();
const ticketController = new TicketController(ticketService);

router.get("/", ticketController.getAllTickets);
router.post("/", ticketController.createTicket);

export default router;
