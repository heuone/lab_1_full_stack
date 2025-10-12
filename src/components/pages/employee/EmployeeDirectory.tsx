// https://www.altcademy.com/blog/how-to-import-json-file-in-reactjs/
// Researched how to import a json file in react file and implementing it to render a list

import employees from "../../directory/employeeList.json";
import { useEntryForm } from "../../../hooks/useEntryForm";

export default function EmployeeDirectory() {
  const objectValues = {name: "",department: ""};
  const { formData, handleInputChange, handleSubmit, errors } = useEntryForm(objectValues);

  return (
    <section id="employee_directory">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleInputChange}
        />
        <button type="submit">Add Employee</button>
        {errors.length > 0 && (
          <div>
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </form>
      {employees.map((dept, index) => (
        <div key={index}>
          <h4>{dept.department}</h4>
          <ul>
            {dept.names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};