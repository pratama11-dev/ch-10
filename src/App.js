import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dasboard";
import Home from "./components/Home";
<<<<<<< HEAD
import Users from "./components/users/Users";
=======
import GameList from "./pages/GameList.jsx";
import GameHome from "./components/game/Index.jsx";
import PlayRPS from "./components/game/rock-paper-scissors/Play.jsx";
>>>>>>> c79b49029356579e14f81edb734685bb3721a2f1
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
<<<<<<< HEAD
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
=======
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/games" element={<GameList />} />
          <Route path="/game" element={<GameHome />}>
            <Route
              path="rock-paper-scissors"
              element={<PlayRPS user={userData} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
>>>>>>> c79b49029356579e14f81edb734685bb3721a2f1
  );
}

export default App;
