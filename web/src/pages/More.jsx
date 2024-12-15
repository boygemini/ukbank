import Lock from "../assets/lock-2.png";
import Login from "./Login";

const More = () => {
  const logout = () => {
    localStorage.removeItem("loggedin");
    window.location.href = "/login";
  };
  return window.localStorage.getItem("loggedin") ? (
    <div className="major-container">
      <div className="card-container">
        <img src={Lock} alt="" />
        <p>Sorry, you don't have the permission to view this time.</p>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  ) : (
    <Login />
  );
};

export default More;
