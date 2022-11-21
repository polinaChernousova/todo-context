import React, { useState, useEffect } from "react";

const EditTodo = ({ currentTodo, saveEditedTodo, openCloseEditForm }) => {
  const [edTodo, setEdTodo] = useState(currentTodo);

  useEffect(() => {
    setEdTodo(currentTodo);
  }, [currentTodo]);

  const handleChange = (e) => {
    let obj = {
      ...edTodo,
      [e.target.name]: e.target.value,
    };
    setEdTodo(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEditedTodo(edTodo);
    setEdTodo({ id: null, title: "" });
    openCloseEditForm();
  };
  return (
    <div>
      <h2>Edit todo</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          value={edTodo.title}
          onChange={handleChange}
        />
        <button>Edit todo</button>
      </form>
    </div>
  );
};

export default EditTodo;
