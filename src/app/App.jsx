import React, { useState } from "react";
import Header from "../layouts/Header";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Footer from "../layouts/Footer";
import swal from 'sweetalert';

export default function App() {
  const [items, setItems] = useState([]);

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

    function handleClearList () {
        swal({
            title: 'Clear List, are you sure?',
            text: 'Once deleted, impossible to recover!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                setItems([]);
                swal('Your items have been deleted!', {
                    icon: 'success',
                });
            } else {
                swal('Your items are safe!');
            }
        });
    }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Footer items={items} />
    </div>
  );
}
