const Form = ({ title, content, titleChangeHandler, contentChangeHandler, clickAddBtnHandler }) => {
  return (
    <form className="add-form">
      <div className="group">
        {/* <label className="form-title">제목&nbsp;</label> */}
        <input value={title} placeholder="제목을 입력해주세요" onChange={titleChangeHandler} />
        {/* <label className="form-content">내용&nbsp;</label> */}
        <input value={content} className="input-content" placeholder="내용을 입력해주세요" onChange={contentChangeHandler} />
        <button className="add-btn" onClick={clickAddBtnHandler}>
          추가하기
        </button>
      </div>
    </form>
  );
};

export default Form;
