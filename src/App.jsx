import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  localStorage.setItem('todos', JSON.stringify(todos));
  const [doneTodos, setDoneTodo] = useState(() => JSON.parse(localStorage.getItem('doneTodos')) || []);
  localStorage.setItem('doneTodos', JSON.stringify(doneTodos));

  // '삭제' 버튼 클릭 이벤트
  const clickDelBtnHandler = (id) => {
    const newWorkingTodos = todos.filter((todo) => todo.id !== id);
    const newDoneTodos = doneTodos.filter((item) => item.id !== id);
    setTodos(newWorkingTodos);
    setDoneTodo(newDoneTodos);
  };

  // '완료' 버튼 클릭 이벤트
  const clickDoneBtnHandler = (id) => {
    const newDoneTodos = todos.find((item) => item.id === id);
    setDoneTodo([...doneTodos, newDoneTodos]);
    setTodos(todos.filter((item) => item.id !== id));
  };

  // '취소' 버튼 클릭 이벤트
  const clickCancelBtnHandler = (id) => {
    const canceledItem = doneTodos.find((item) => item.id === id);
    const newDoneTodos = doneTodos.filter((item) => item.id !== id);
    setDoneTodo(newDoneTodos);
    setTodos([...todos, canceledItem]);
  };

  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <div className="list-container">
        <h2 className="list-title">Working...🔥</h2>
        <div className="todo-wrap">
          {todos.map((item) => (
            <TodoList key={item.id} item={item} clickDelBtnHandler={clickDelBtnHandler} clickDoneBtnHandler={clickDoneBtnHandler} isDone={false} />
          ))}
        </div>
        <h2 className="list-title">Done...🥳</h2>
        <div className="todo-wrap">
          {doneTodos.map((item) => (
            <TodoList key={item.id} item={item} clickDelBtnHandler={clickDelBtnHandler} clickCancelBtnHandler={clickCancelBtnHandler} isDone={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
