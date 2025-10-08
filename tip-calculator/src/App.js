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
      {/* Bill Amount */}
      <BillInput bill={bill} setBill={setBill} />

      {/* You Tip */}
      <Tip
        labelFor="tipAmount"
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
      >
        How much would you like to tip?
      </Tip>
      {/* Your Friend's Tip */}
      <Tip
        labelFor="friendTip"
        tipAmount={friendTip}
        setTipAmount={setFriendTip}
      >
        How much your friend would like to tip?
      </Tip>

      {bill > 0 && (
        <>
          {/* Total Bill */}
          <TotalBillMsg
            totalBill={totalBill}
            billNum={billNum}
            totalTip={totalTip}
          />

          {/* Reset Button */}
          <ResetButton onClick={reset}>Reset</ResetButton>
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <form>
      <label for="billAmount">How much was the bill?</label>
      <input
        type="number"
        id="billAmount"
        name="billAmount"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </form>
  );
}

function Tip({ labelFor, children, tipAmount, setTipAmount }) {
  return (
    <div>
      <label for={labelFor}>{children}</label>
      <select
        id={labelFor}
        name={labelFor}
        value={tipAmount}
        onChange={(e) => setTipAmount(e.target.value)}
      >
        <option value="0">0%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}

function TotalBillMsg({ totalBill, billNum, totalTip }) {
  return (
    <h2>
      You Pay ${totalBill} (${billNum} + ${totalTip} tip)
    </h2>
  );
}

function ResetButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
