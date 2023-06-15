# React 개인 과제 "Todo List"


## 🖥️ 프로젝트 소개

기본 기능을 갖춘 Todo List 사이트 입니다.


## 🎬 구현 사이트 이미지

- 배포 링크 : <https://react-solo-project.vercel.app/>

![스크린샷 2023-06-16 오전 3 46 15](https://github.com/jei1211/react-solo-project/assets/117563796/f854c204-6627-4769-87e4-72c12cd45ad9)


## 🕰️ 개발 기간

- 23.06.12일(월) - 23.06.15일(목)


## 📌 구현 기능
- UI
- Todo 추가
- Todo 삭제
- Todo 완료 상태 변경 (완료 <-> 진행중)


## ❗ 요구 사항

### 디자인은 취향대로 진행하나 화면 구성은 동일하게!!
1. 제목 & 내용 입력 후 "추가" 버튼 클릭 시 Working에 새로운 Todo가 추가되고,<br>
제목 & 내용 input은 다시 빈 값으로 바뀌도록 구성

2. Todo의 isDone 상태가 true이면 상태 버튼의 라벨을 `취소`,<br>
isDone이 false이면 라벨을 `완료`로 조건부 렌더링

3. Todo의 상태가 `Working`이면 왼쪽에 위치하고, <br>
`Done`이면 아래쪽에 위치하도록 구현

4. Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고,<br>
전체 화면의 가운데로 정렬

5. 컴포넌트 구조는 자유롭게!<br>
반복되는 컴포넌트를 찾아서 직접 분리하고, 분리한 컴포넌트를 `README`에 작성


## 🔗 컴포넌트 구조
- **Header.jsx** : 페이지 상단 
- **App.jsx** : Main 
- **Form.jsx** : Todo 추가
- **TodoList.jsx** : Todo 완료/취소/삭제


## ⚙️ 개발 환경 / 기술스택

- **`Node.js`**
- **`Yarn`**
- **`create-react-app`**
- React
- JavaScript
- HTML
- CSS
