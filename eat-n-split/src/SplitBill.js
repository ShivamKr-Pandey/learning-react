import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function SplitBill({ selectFriend, setBalance }) {
  // States
  const [totalBill, setTotalBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  // Dervived States
  const totalNum = Number(totalBill) || 0;
  const yourNum = Number(yourExpense) || 0;
  const friendExpense = Math.max(0, totalNum - yourNum);

  function handleSubmit(e) {
    e.preventDefault();

    if (!totalBill || !yourExpense) return;
    if (yourNum > totalNum) return;

    setBalance(whoIsPaying === "you" ? friendExpense : -yourNum);

    // Reset the form
    setTotalBill("");
    setYourExpense("");
    setWhoIsPaying("you");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <Input
        id="bill"
        value={totalBill}
        type={"number"}
        onChange={(e) => setTotalBill(e.target.value)} // fixed typo (target)
      >
        <span>💰</span> Bill Value
      </Input>

      <Input
        id="your-expense"
        value={yourExpense}
        type={"number"}
        onChange={(e) => setYourExpense(e.target.value)}
      >
        <span>🧍‍♂️</span> Your Expense
      </Input>

      <Input
        id="friend-expense"
        value={friendExpense}
        type={"number"}
        disabled={true}
      >
        <span>👯‍♂️</span> {selectFriend.name}'s expense:
      </Input>

      <label htmlFor="payee">
        <span>🤑</span>Who is Paying the Bill?
      </label>
      <select
        id="payee"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button type="submit">Split Bill</Button>
    </form>
  );
}
