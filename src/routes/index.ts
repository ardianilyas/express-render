import { Router } from "express";
import ticketRoute from "../feature/ticket/ticket.routes";

const router = Router();

// router.use("/api");

router.use("/tickets", ticketRoute);

export default router;
