//jshint esversion:6
import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [itemArray, setItemArray] = useState([]);

  function handleClick(event, note) {
    setItemArray((prevValue) => {
      return [...prevValue, note];
    });
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleClick} />
      {itemArray.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
