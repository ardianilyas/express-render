import express from "express";
import apiRoute from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", apiRoute);

app.get("/", (_req, res) => {
  res.send("Hello from Express + TS 🚀");
});

app.get("/health", (_req, res) => {
  res.status(200).send({ message: "OK" });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});