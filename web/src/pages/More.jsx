import Lock from "../assets/lock-2.png";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const More = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="major-container">
      <div className="card-container">
        <img src={Lock} alt="" />
        <p>Sorry, you don't have the permission to view this time.</p>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default More;
