import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

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
    const confirmed = window.confirm(
      `Are you sure you want to delete all ${items.length} items?`
    );
    if (confirmed) setItems([]);
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
