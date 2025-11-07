type EmployeeData = {
  id: number;        
  department: string;
  names: string[];
};


let employeeList: EmployeeData[] = [
  { id: 1, department: "DevOps", names: [  "Bayle Castillo", "Aleca Castillo"] },
];
export const createEmployee = async (newEmployee: EmployeeData): Promise<EmployeeData> => {
  employeeList.push(newEmployee);
  return newEmployee;
};

export const getAllEmployees = async (): Promise<EmployeeData[]> => {
  return employeeList;
};

export const updateEmployee = async (
  department: string,
  updatedData: EmployeeData
): Promise<EmployeeData | null> => {
  const index = employeeList.findIndex(
    (entry) => entry.department.toLowerCase() === department.toLowerCase()
  );

  if (index !== -1) {
    employeeList[index] = updatedData;
    return employeeList[index];
  }

  return null;
};

export const deleteEmployee = async (department: string): Promise<void> => {
  const index = employeeList.findIndex(
    (entry) => entry.department.toLowerCase() === department.toLowerCase()
  );

  if (index !== -1) {
    employeeList.splice(index, 1);
  }
};
