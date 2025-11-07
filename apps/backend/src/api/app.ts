import express, { Express } from "express";
import employeeRoutes from "../api/v1/routes/employeeRoutes";

const app: Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hellow world!!!");
});

app.use("/api/v1/employees", employeeRoutes);

export default app;
