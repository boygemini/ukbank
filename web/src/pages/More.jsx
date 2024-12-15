import Lock from "../assets/lock-2.png";

const More = () => {
  const logout = () => {
    sessionStorage.removeItem("loggedin");
    window.location.href = "/login";
  };
  return (
    <div className="major-container">
      <div className="card-container">
        <img src={Lock} alt="" />
        <p>Sorry, you don't have the permission to view this time.</p>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default More;
