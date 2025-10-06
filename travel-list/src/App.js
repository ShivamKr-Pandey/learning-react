import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <>
      <Header />
      <main>
        <Form onAddItems={addItem} />
        <PackingList
          items={items}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
          clearList={handleClearList}
        />
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

function PackingList({ items, onDeleteItem, onToggleItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          <ul>
            {sortedItems.map((item) => (
              <Item
                item={item}
                onDeleteItem={onDeleteItem}
                key={item.id}
                onToggleItem={onToggleItem}
              />
            ))}
          </ul>

          <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">Sort by input order</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={clearList}>Clear List</button>
          </div>
        </>
      )}
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Footer({ items }) {
  // Early return if no items
  if (!items.length) {
    return (
      <footer className="stats">
        <p>
          <em>Add some items to your packing list 🧳</em>
        </p>
      </footer>
    );
  }
  let allItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / allItems) * 100);

  return (
    <footer className="stats">
      <p>
        <em>
          {percentage === 100 && allItems > 0
            ? "You are ready to go ✈️"
            : `You have ${allItems} items on you list, and you already packed
        ${" " + packedItems} (${percentage}%)`}
        </em>
      </p>
    </footer>
  );
}
