import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Dashboard() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      <Outlet />
    </>
  );
}

export default Dashboard;
