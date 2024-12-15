import Board from "../components/Board";
import Transactions from "../components/Transactions";

const Accounts = () => {
  return (
    <div className="accounts-parent">
      <Board
        accType="CURRENT ACCOUNTS"
        detail="73848992 | 16-99-20"
        name={"ALON PALMER"}
        amount={"£457,728.37"}
        av={"457,728.37"}
      />
      <Transactions />
    </div>
  );
};

export default Accounts;
