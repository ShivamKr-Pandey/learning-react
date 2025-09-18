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

  function handleReset() {
    setCount(1);
    setDate(0);
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
        <input
          type="range"
          min="1"
          max="10"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {count}
      </div>

      {/* Date Counter */}
      <div className="date_counter">
        <button onClick={() => setDate((date) => date - count)}>-</button>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(Number(e.target.value))}
        />
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

      {count !== 1 || date !== 0 ? (
        <button onClick={() => handleReset()}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
