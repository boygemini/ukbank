import Login from "./Login";

const Cards = () => {
  return window.localStorage.getItem("loggedin") ? (
    <div className="major-container">
      <h1 className="section-title">Cards</h1>
      <div className="card-div">
        <p>
          Sorry, you have no cards, please verify your account and try again
        </p>
      </div>
    </div>
  ) : (
    <Login />
  );
};

export default Cards;
