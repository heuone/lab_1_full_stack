import { Router } from "express";
import * as employeeController from "../controllers/employeeController";

const router = Router();

router.get("/", employeeController.getAllEmployees);

router.post("/", employeeController.createEmployee);

router.put("/:department", employeeController.updateEmployee);

router.delete("/:department", employeeController.deleteEmployee);

export default router;
