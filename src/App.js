import React, { useState, useEffect } from "react";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import auth from "./firebase/firebase";
// import withAuthGuard from './components/AdGuard';

function App() {
  // const [user, setUser] = useState(false);

  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/dash" element={<Dashboard />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
