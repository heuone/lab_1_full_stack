import express, { Express } from "express";
import cors from "cors";
import corsOptions from "./config/cors";
import setupSwagger from "./config/swagger";
import { clerkMiddleware } from "@clerk/express";
import employeeRoutes from "../api/v1/routes/employeeRoutes";

const app: Express = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use(clerkMiddleware());

app.get("/", (_req, res) => {
  res.send("Hello world!!!");
});

app.use("/api/v1/employees", employeeRoutes);
setupSwagger(app);

export default app;
