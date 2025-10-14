import { Button } from "./Button";

export function Friends({ list, select, onSelect }) {
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
