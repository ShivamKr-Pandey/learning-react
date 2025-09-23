import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <main>
        <Form onAddItems={addItem} />
        <PackingList items={items} onDeleteItem={deleteItem} />
      </main>
      <Footer items={items} />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>🌴Far Away💼</h1>
    </header>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      alert("Please enter an item");
      return;
    }

    const newItem = {
      description,
      quantity: count,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setCount(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        className="item-count"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Footer({ items, onDeleteItem }) {
  let allItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  console.log(packedItems);
  const percentage = Math.round((packedItems / allItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {items.length} items on you list, and you already packed{" "}
        {packedItems} ({percentage}%)
      </em>
    </footer>
  );
}
