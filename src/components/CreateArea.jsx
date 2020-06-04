import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [inputName]: newValue,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            {
              props.onAdd(event, note);
              setNote({
                title: "",
                content: "",
              });
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
