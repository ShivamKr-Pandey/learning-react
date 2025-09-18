import { useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  // Step Counter
  const [count, setCount] = useState(1);
  // Date Counter
  const [date, setDate] = useState(0);

  function addDays() {
    const today = new Date();
    let currentDate = today.getDate();
    let newDate = currentDate + date;

    today.setDate(newDate);
    const formattedDate = today.toDateString();
    return formattedDate;
  }

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px 0",
      }}
    >
      {/* Step Counter */}
      <div className="step_counter">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span>step: {count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>

      {/* Date Counter */}
      <div className="date_counter">
        <button onClick={() => setDate((date) => date - count)}>-</button>
        <span>counter: {date}</span>
        <button onClick={() => setDate((date) => date + count)}>+</button>
      </div>

      {/* Display Date */}
      <div className="display_date">
        <h3>
          <span>
            {date === 0
              ? "Today is"
              : date > 0
              ? `${date} days from now is `
              : `${Math.abs(date)} days ago was `}
          </span>{" "}
          {addDays()}.
        </h3>
      </div>
    </div>
  );
}

export default App;
