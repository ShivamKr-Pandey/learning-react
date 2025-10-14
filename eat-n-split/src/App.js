import { useState } from "react";
import { SplitBill } from "./SplitBill";
import { AddFriend } from "./AddFriend";
import { Button } from "./Button";
import { FriendsList } from "./FriendsList";

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
  // States
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

  // Function to select a friend
  function handleSelect(friend) {
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  // Function to update the friends balance
  function updateBalance(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* Friend List */}
        <FriendsList
          friends={friends}
          select={handleSelect}
          onSelect={selectFriend}
        />

        {/* Add Friend Component*/}
        {addFriend && <AddFriend onAddFriend={addNewFriend} />}

        {/* Add Friend Button */}
        <Button
          className="button"
          onClick={() => {
            handleAddFriend();
          }}
        >
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {/* Split Bill Component */}
      {selectFriend && (
        <SplitBill selectFriend={selectFriend} setBalance={updateBalance} />
      )}
    </div>
  );
}

export default App;
