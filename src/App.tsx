// src/App.tsx
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import EmployeeDirectory from "./components/EmployeeDirectory";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
      <EmployeeDirectory />
      </main>
      <Footer />
    </div>
  );
}
