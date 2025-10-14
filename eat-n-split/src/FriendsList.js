import { Friends } from "./Friends";

export function FriendsList({ friends, select, onSelect }) {
  const friendsList = friends;

  return (
    <div>
      <ul>
        <Friends list={friendsList} select={select} onSelect={onSelect} />
      </ul>
    </div>
  );
}
