import React, { useState } from "react";

const AddTodo = ({ addTodoFunc }) => {
  const initialFormState = { id: null, title: "" };
  const [todo, setTodo] = useState(initialFormState);

  const handleChange = (e) => {
    let obj = {
      ...todo,
      [e.target.name]: e.target.value,
    };
    setTodo(obj);
    // console.log(obj);

    //🌚 a bit difficult version
    // const { name, value } = event.target;
    // setTodo({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title) return;

    addTodoFunc(todo);
    setTodo(initialFormState);
  };
  return (
    <div>
      <h2>Add new todo</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
        <button>Add new todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
