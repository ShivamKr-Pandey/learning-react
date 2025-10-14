import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function AddFriend({ onAddFriend }) {
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
        <Button type={"submit"}>Add</Button>
      </form>
    </>
  );
}
