import { useState } from "react";

const friends = [
  {
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=clark",
    balance: -7,
  },
  {
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=sarah",
    balance: 20,
  },
  {
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=anthony",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <FriendsList />
    </div>
  );
}

function FriendsList() {
  return (
    <div className="sidebar">
      <ul>
        <Friends list={friends} />
      </ul>
    </div>
  );
}

function Friends({ list }) {
  return (
    <>
      {list.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>
          <Button onClick={() => {}}>Select</Button>

          {friend.balance < 0 && (
            <p className="red">
              You owe {friend.name} Rs {Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance > 0 && (
            <p className="green">
              {friend.name} owes you Rs {friend.balance}
            </p>
          )}
          {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        </li>
      ))}
    </>
  );
}

function SplitBill({ name }) {
  return (
    <form className="form-split-bill">
      <Input id="bill" value="" onChange={() => {}}>
        <span>💰</span> Bill Value
      </Input>
      <Input id="your-expense" value="" onChange={() => {}}>
        <span>🧍‍♂️</span> Your Expense
      </Input>
      <Input id="friend-expense" value="" onChange={() => {}}>
        <span>👯‍♂️</span> {name}'s expense:
      </Input>
      <label for="payee">
        <span>🤑</span>Who is Paying the Bill?
      </label>
      <select id="payee">
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button onClick={() => {}}>Split Bill</Button>
    </form>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function Input({ value, onChange, children, id }) {
  return (
    <>
      <label for={id}>{children}</label>
      <input id={id} value={value} onChange={onChange} />
    </>
  );
}

export default App;
