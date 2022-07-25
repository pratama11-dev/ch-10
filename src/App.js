import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dasboard";
import Home from "./components/Home";
import Users from "./components/users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/reset" element={<Reset/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/users" element={<Users/>} />
    </Routes>
  </Router>
</div>
  );
}

export default App;
