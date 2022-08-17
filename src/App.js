import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Users from "./pages/Users";
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav className="Navbar">
        <div className="logo">
          <h1>System Data</h1>
        </div>
        <div className="nav_links">
          <Link className="nav_link" to="/">
            {" "}
            Home
          </Link>
          <Link className="nav_link" to="/users">
            {" "}
            Users
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
