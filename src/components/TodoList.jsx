import React from 'react';
const TodoList = ({ item, clickDelBtnHandler, clickDoneBtnHandler, clickCancelBtnHandler, isDone }) => {
  return (
    <div className="todo-container" key={item.id}>
      <h2 className="todo-title">{item.title}</h2>
      <div className="todo-content">{item.content}</div>
      <div className="btns">
        <button className="del-btn" onClick={() => clickDelBtnHandler(item.id)}>
          삭제하기
        </button>
        {isDone ? (
          <button className="done-btn" onClick={() => clickCancelBtnHandler(item.id)}>
            취소
          </button>
        ) : (
          <button className="done-btn" onClick={() => clickDoneBtnHandler(item.id)}>
            완료
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
