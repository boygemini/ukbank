import Board from "../components/Board";

const Transfer = () => {
  return (
    <div className="major-container">
      <Board
        accType={"FROM"}
        detail={"73848992 | 16-99-20"}
        name={"ALON PALMER"}
        amount={"£457,728.37"}
        av={"457,728.37"}
      />
      <Board accType="TO" name="NO NAME" amount={""} />
      <Board accType="" detail="AMOUNT" name="£ 0.00" />
      <Board accType="" detail="REFERENCE" name="Allowance" />
      <div className="details">
        <h2>Sending money</h2>
        <p>There's an issue with your account, please contact us.</p>
      </div>
    </div>
  );
};

export default Transfer;
