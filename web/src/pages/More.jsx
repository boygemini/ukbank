import Lock from "../assets/lock-2.png";

const More = () => {
  return (
    <div className="major-container">
      <div className="card-container">
        <img src={Lock} alt="" />
        <p>Sorry, you don't have the permission to view this time.</p>
      </div>
    </div>
  );
};

export default More;
