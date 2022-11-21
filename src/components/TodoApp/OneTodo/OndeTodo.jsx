import React from "react";

const OndeTodo = ({ todo, deleteTodo, openEditForm, setCurrentTodo }) => {
  const handleEdit = () => {
    openEditForm();
    setCurrentTodo(todo);
  };
  return (
    <li>
      {todo.id}) {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Del</button>
      <button onClick={() => handleEdit()}>Edit</button>
    </li>
  );
};

export default OndeTodo;
