import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header() {
  return (
    <header>
      <div className="black-nav">
        <h4 style={{ color: 'gray' }}>뉴스 요약기</h4>
      </div>
    </header>
  )
}

function NewsList(props){
  const title = props.title;
  return(
    <div className='newsList'>
        <h4>{title}</h4>
        <p>test</p>
      </div>

  )
}

function App() {
  let post = '강남 우동 맛집'//서버에서 받는 데이터
  let [newsTitle, func] = useState(['강남 맛집 추천', '윤석열 퇴진', '경제 개발 5주년']);
  let [count, countup] = useState(0);

  return (
    <div className="App">
      <Header />
      <div>
        <button onClick={() => {
          let copy = [...newsTitle];
          copy.sort();
          func(copy)
        }}>💻</button>
      </div>
      <div className='newsList'>
        <h4>
          {newsTitle[0]}
          <button onClick={() => {
            let temp = [...newsTitle];
            temp[0] = '여자코트 추천';
            func(temp)
          }}>
            💗</button>
          {count}
        </h4>
        <p>test1</p>
      </div> 
      <NewsList title={newsTitle[1]}/>
      <NewsList title={newsTitle[2]}/>
      <Modal></Modal>
    </div>
  );
}
function Modal() {
  return (
    <div className='modal'>
      <h3>제목</h3>
      <p className='date'>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
