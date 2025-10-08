import { useState } from "react";

function App() {
  const [bill, setBill] = useState();
  const [tipAmount, setTipAmount] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function reset() {
    setBill(0);
    setTipAmount(0);
    setFriendTip(0);
  }

  const totalTip =
    Number((bill / 100) * tipAmount) + Number((bill / 100) * friendTip);

  const totalBill = Number(bill) + totalTip;

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
        You Pay ${Number.isNaN(totalTip) ? "0" : totalBill} ($
        {bill === undefined ? "0" : bill} + $
        {Number.isNaN(totalTip) ? "0" : totalTip} tip)
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
