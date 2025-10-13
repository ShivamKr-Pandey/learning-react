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

  function handleAddFriend() {
    setAddFriend((cur) => !cur);
  }

  // This way will not change the original array. Because react is all about Immutability.
  function addNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
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
      <SplitBill />
    </div>
  );
}

function FriendsList({ friends }) {
  const friendsList = friends;

  return (
    <div>
      <ul>
        <Friends list={friendsList} />
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
      <Input id="bill" value="" type={"number"} onChange={() => {}}>
        <span>💰</span> Bill Value
      </Input>
      <Input id="your-expense" value="" type={"number"} onChange={() => {}}>
        <span>🧍‍♂️</span> Your Expense
      </Input>
      <Input
        id="friend-expense"
        value=""
        type={"number"}
        disabled={"true"}
        onChange={() => {}}
      >
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
