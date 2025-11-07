import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";
import { successResponse, errorResponse } from "../models/responseModel";

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id, department, names } = req.body;

    if (!id || !department || !names) {
      res.status(400).json(errorResponse("Id, department, and names are required"));
      return;
    }

    const newEmployee = await employeeService.createEmployee({ id, department, names });
    res.status(201).json(successResponse(newEmployee, "Employee is created"));
  } catch (error) {
    next(error);
  }
};

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(successResponse(employees, "All employees retrieved"));
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { department } = req.params;
    const { id, names } = req.body;

    if (!id || !names) {
      res.status(400).json(errorResponse("Id and names are required"));
      return;
    }

    const updatedEmployee = await employeeService.updateEmployee(department, { id, department, names });

    if (!updatedEmployee) {
      res.status(404).json(errorResponse("Employee not found"));
      return;
    }

    res.status(200).json(successResponse(updatedEmployee, "Employee is updated"));
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { department } = req.params;
    await employeeService.deleteEmployee(department);
    res.status(200).json(successResponse(null, "Employee is deleted"));
  } catch (error) {
    next(error);
  }
};
