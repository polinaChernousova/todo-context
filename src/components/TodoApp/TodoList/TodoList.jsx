import React from "react";
import OndeTodo from "../OneTodo/OndeTodo";

const TodoList = ({ todosArr, deleteTodo, openEditForm, setCurrentTodo }) => {
  console.log(todosArr);
  return (
    <ul>
      {todosArr.map((item) => (
        <OndeTodo
          key={item.id}
          todo={item}
          deleteTodo={deleteTodo}
          openEditForm={openEditForm}
          setCurrentTodo={setCurrentTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
