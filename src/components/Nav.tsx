import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li>
        <li>
          <NavLink to="/organization">Organization</NavLink>
        </li>
      </ul>
    </nav>
  );
}