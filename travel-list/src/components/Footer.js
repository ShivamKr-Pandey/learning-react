export default function Footer({ items }) {
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
