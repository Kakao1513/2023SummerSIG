import './App.css';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useDataStore } from './store/dataList';

function Header() {
  return (
    <header>
      <div className="black-nav">
        <h4 style={{ color: 'white' }}>뉴스 요약기</h4>
      </div>
    </header>
  )
}
function MainForm() {
  return (
    <div className="main-form">
      <Navigation></Navigation>
      <div>
        <ArticleContent></ArticleContent>
        <ArticleContent></ArticleContent>
        <ArticleContent></ArticleContent>
        <ArticleContent></ArticleContent>
        <ArticleContent></ArticleContent>
        <ArticleContent></ArticleContent>
      </div>
    </div>
  )
}
function Navigation() {
  const categori = ["정치", "경제", "사회", "생활/문화", "IT/과학", "세계"];
  const arr = [];
  function navRepeater() {
    for (let i = 0; i < categori.length; i++) {
      arr.push(
        <CategoriButton categori={categori[i]}></CategoriButton>
      )
    }
    return arr;
  }
  return (
    <div>
      {navRepeater()}
    </div>
  )
}
function CategoriButton(props) {
  const categori = props.categori;
  return (
    <span className="main-nav">
      <button>{categori}</button>
    </span>
  )
}
function ArticleContent(props) {
  let rank = props.rank;
  return (
    <div className="topic-container">
      <div className="topic-item">
        <span><img src="firstsig/public/logo192.png"></img></span>
        <span>
          <div className="content">
            <div className="title"><h3>title test</h3></div>
            <div className="main-article"><article>Qui aimes-tu le mieux, homme enigmatique, dis?

              ton pere, ta merem ta soeurs, ou ton frere?</article></div>
            <div className="time"><p>time</p></div>
          </div>
        </span>

      </div>
    </div>
  )
}


function NewsList(props) {
  const { newsTitle } = useDataStore();
  let title = [...newsTitle];
  return (
    <div className='newsList'>
      <h4>{title[props.number]}</h4>
      <p>test</p>
    </div>
  )
}

function App() {
  const { newsTitle } = useDataStore();
  return (
    <div className="App">
      <Header />
      <MainForm></MainForm>
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
