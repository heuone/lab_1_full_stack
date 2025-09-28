import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Organization } from "./components/pages/organization/Organization";
import EmployeeDirectory from "./components/pages/employee/EmployeeDirectory";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
        <Routes>
          <Route path="/employees" element={<EmployeeDirectory />} />
          <Route path="/organization" element={<Organization />} />
        </Routes>
      <Footer />
    </div>
  );
}
