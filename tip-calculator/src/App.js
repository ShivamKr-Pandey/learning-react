import { useState } from "react";

function App() {
  // keep input states as strings (matches input.value) and coerce to numbers for calculations
  const [bill, setBill] = useState("");
  const [tipAmount, setTipAmount] = useState("0");
  const [friendTip, setFriendTip] = useState("0");

  function reset() {
    setBill("");
    setTipAmount("0");
    setFriendTip("0");
  }

  // coerce values to numbers and fall back to 0 when empty/invalid
  const billNum = Number(bill) || 0;
  const tipPercent = Number(tipAmount) || 0;
  const friendPercent = Number(friendTip) || 0;

  const totalTip =
    (billNum * tipPercent) / 100 + Math.round((billNum * friendPercent) / 100);
  const totalBill = billNum + totalTip;

  return (
    <div className="App">
      <form>
        <label for="billAmount">How much was the bill?</label>
        <input
          type="number"
          id="billAmount"
          name="billAmount"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
        <Tip
          labelFor="tipAmount"
          label="How much would you like to tip?"
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
        >
          <option value="0">0%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </Tip>

        <Tip
          labelFor="friendTip"
          label="How much your friend would like to tip?"
          tipAmount={friendTip}
          setTipAmount={setFriendTip}
        >
          <option value="0">0%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </Tip>
      </form>

      <h2>
        You Pay ${totalBill} (${billNum} + ${totalTip} tip)
      </h2>

      <ResetButton onClick={reset}>Reset</ResetButton>
    </div>
  );
}

function Tip({ labelFor, label, children, tipAmount, setTipAmount }) {
  return (
    <div>
      <label for={labelFor}>{label}</label>
      <select
        id={labelFor}
        name={labelFor}
        value={tipAmount}
        onChange={(e) => setTipAmount(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
}

function ResetButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
