import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const id = uuidv4();
  // 값 변경 + 리렌더링을 위한 State 선언
  const [todos, setTodos] = useState([{ id, title: '프로그래머스', content: '하루에 5문제씩 풀어보기', isDone: false }]);
  const [doneTodos, setDoneTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const clickAddBtnHandler = (e) => {
    e.preventDefault();
    // 불필요한 새로고침 동작 막기

    if (!title) return alert('제목을 입력해주세요');
    if (!content) return alert('내용을 입력해주세요');
    // 빈 값 검사

    const newTodos = {
      id,
      title,
      content,
    };
    // 좌, 우 키값이 동일할 경우 생략 가능

    setTodos([...todos, newTodos]);
    setTitle('');
    setContent('');
    // 기존 배열(todos)을 풀고 newTodos를 더해 새로운 배열로 변환
    // 제목, 내용 인풋값 초기화
  };
  // '삭제' 버튼 클릭 이벤트
  const clickDelBtnHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const newDoneTodos = doneTodos.filter((item) => item.id !== id);
    setTodos(newTodos);
    setDoneTodo(newDoneTodos);
  };

  // '완료' 버튼 클릭 이벤트
  const clickDoneBtnHandler = (id) => {
    const DoneItem = todos.find((item) => item.id === id);
    setDoneTodo([...doneTodos, DoneItem]);
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
      <Form title={title} content={content} titleChangeHandler={titleChangeHandler} contentChangeHandler={contentChangeHandler} clickAddBtnHandler={clickAddBtnHandler} />
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
