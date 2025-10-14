import { useState } from "react";

const iniFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=clark",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=sarah",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=anthony",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(iniFriends);

  const [addFriend, setAddFriend] = useState(false);

  const [selectFriend, setSelectFriend] = useState(null);

  function handleAddFriend() {
    setAddFriend((cur) => !cur);
  }

  // This way will not change the original array. Because react is all about Immutability.
  function addNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setAddFriend(false);
  }

  function handleSelect(friend) {
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          select={handleSelect}
          onSelect={selectFriend}
        />
        {addFriend && <AddFriend onAddFriend={addNewFriend} />}
        <Button
          className="button"
          onClick={() => {
            handleAddFriend();
          }}
        >
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectFriend && <SplitBill selectFriend={selectFriend} />}
    </div>
  );
}

function FriendsList({ friends, select, onSelect }) {
  const friendsList = friends;

  return (
    <div>
      <ul>
        <Friends list={friendsList} select={select} onSelect={onSelect} />
      </ul>
    </div>
  );
}

function Friends({ list, select, onSelect }) {
  return (
    <>
      {list.map((friend) => (
        <li
          key={friend.id}
          className={onSelect?.id === friend.id ? "selected" : ""}
        >
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>
          <Button
            onClick={() => {
              select(friend);
            }}
          >
            {onSelect?.id === friend.id ? "Close" : "Select"}
          </Button>

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

function SplitBill({ selectFriend }) {
  const [totalBill, setTotalBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  function handelFriendsExpense() {
    const friendExpense = totalBill - yourExpense;
    setFriendExpense(friendExpense);
  }

  return (
    <form className="form-split-bill">
      <Input
        id="bill"
        value={totalBill}
        type={"number"}
        onChange={(e) => {
          setTotalBill(e.traget.value);
        }}
      >
        <span>💰</span> Bill Value
      </Input>
      <Input
        id="your-expense"
        value={yourExpense}
        type={"number"}
        onChange={(e) => {
          setYourExpense(e.target.value);
        }}
        onBlur={handelFriendsExpense}
      >
        <span>🧍‍♂️</span> Your Expense
      </Input>
      <Input
        id="friend-expense"
        value={friendExpense}
        type={"number"}
        disabled={"true"}
        onChange={(e) => {
          setFriendExpense(e.target.value);
        }}
      >
        <span>👯‍♂️</span> {selectFriend.name}'s expense:
      </Input>
      <label htmlFor="payee">
        <span>🤑</span>Who is Paying the Bill?
      </label>
      <select
        id="payee"
        value={whoIsPaying}
        onChange={(e) => {
          setWhoIsPaying(e.target.value);
        }}
      >
        <option value="you">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <Button onClick={() => {}}>Split Bill</Button>
    </form>
  );
}

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addFriend(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={addFriend}>
        <Input
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type={"text"}
        >
          Friend Name
        </Input>
        <Input
          id="image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type={"url"}
        >
          Image URL
        </Input>
        <Button>Add</Button>
      </form>
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function Input({ value, onChange, children, id, type, disabled }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
    </>
  );
}

export default App;
