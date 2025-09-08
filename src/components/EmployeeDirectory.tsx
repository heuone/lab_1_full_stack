// https://www.altcademy.com/blog/how-to-import-json-file-in-reactjs/
// Researched how to import a json file in react file and implementing it to render a list

import employees from "../components/directory/employeeList.json"; 

export default function EmployeeDirectory() {
  return (
    <section id="employee_directory">
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
}