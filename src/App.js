import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/TodoApp/AddTodo/AddTodo";
import TodoList from "./components/TodoApp/TodoList/TodoList";
import EditTodo from "./components/TodoApp/EditTodo/EditTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      done: false,
    },
    {
      id: 2,
      title: "Ничего не делать",
      done: false,
    },
  ]);
  const [isEditing, setIsEdititng] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: null, title: "" });

  const addTodo = (newTodo) => {
    newTodo.id = todos.length + 1;
    let arr = [...todos];
    arr.push(newTodo);
    setTodos(arr);

    // setTodos([...todos, newTodo]); //🌚 a bit difficult version
  };

  const deleteTodo = (id) => {
    let arr = [...todos];
    arr = arr.filter((item) => item.id !== id);
    setTodos(arr);

    // setTodos(todos.filter((item) => item.id !== id)); //🌚 a bit difficult version
  };

  const openCloseEditForm = () => {
    setIsEdititng(!isEditing);
  };

  // just saves new todo object
  const saveEditedTodo = (newTodo) => {
    let arr = [...todos];
    arr = arr.map((item) => (item.id === newTodo.id ? newTodo : item));
    setTodos(arr);
  };

  return (
    <div>
      <AddTodo addTodoFunc={addTodo} />
      <TodoList
        todosArr={todos}
        deleteTodo={deleteTodo}
        openEditForm={openCloseEditForm}
        setCurrentTodo={setCurrentTodo}
      />
      {isEditing ? (
        <EditTodo
          currentTodo={currentTodo}
          saveEditedTodo={saveEditedTodo}
          openCloseEditForm={openCloseEditForm}
        />
      ) : null}
    </div>
  );
}

export default App;
