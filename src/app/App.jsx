import React, { useState } from "react";
import Header from "../layouts/Header";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Footer from "../layouts/Footer";
import swal from "sweetalert";

export default function App() {
  //**************** variables ****************//
  const [items, setItems] = useState([]);

  //**************** functions ****************//
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length === 0) {
      swal("Invalid!", "There are no items to clear.", "error");
      return;
    } else {
      swal({
        title: "Clear List, Are You Sure?",
        text: "Once deleted, impossible to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          setItems([]);
          swal("Successfully Deleted", "Your items have been deleted!", {
            icon: "success",
          });
        } else {
          swal("Items Are Safe", "Your items are safe!", "info");
        }
      });
    }
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
