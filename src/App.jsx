import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      {/* Background with gradient and overflow handling */}
      <div className="w-screen h-screen bg-gradient-to-b from-[rgb(178,220,251)] to-[rgb(234,225,238)] overflow-auto">
        {/* Define routes and corresponding components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
