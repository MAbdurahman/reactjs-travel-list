import React, { useState } from "react";
import swal from "sweetalert";

export default function Form({ onAddItems }) {
    //**************** variables ****************//
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

    //**************** functions ****************//
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      swal("Invalid Description!", "Must be a valid description", "error");
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
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
      <button>Add Item</button>
    </form>
  );
}
