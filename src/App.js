import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dasboard";
import Home from "./components/Home";
import Users from "./components/users/Users";
import GameList from "./pages/GameList.jsx";
import GameHome from "./components/game/Index.jsx";
import PlayRPS from "./components/game/rock-paper-scissors/Play.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, getUser } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchdata() {
      if (user) {
        const data = await getUser(user.uid);
        setUserData(data);
      }
    }
    fetchdata();
  }, [user]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/games" element={<GameList />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/game" element={<GameHome />}>
            <Route
              path="rock-paper-scissors"
              element={<PlayRPS user={userData} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
