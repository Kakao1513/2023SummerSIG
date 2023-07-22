import './App.css';
import {
  ToggleButtonGroup, ToggleButton,
  Stack, Button, Container, Grid, Box,
  Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, ButtonGroup
} from '@mui/material';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useDataStore } from './store/store.js';

function Header() {
  return (
    <header className="app-header">
      <div>
        <h4>네이버 뉴스 요약기</h4>
      </div>
    </header>
  )
}

function Navigation() {
  const categori = [
    { label: '경제' },
    { label: '정치' },
    { label: 'IT/기술' },
    { label: '사회' },
    { label: '세계' },
    { label: '생활/문화' },
  ]
  const [selected, setSelected] = useState(0);
  const handleBottonClick = (bindex) => {
    setSelected(bindex);
  }
  return (
    <Stack spacing={1} direction="row" justifyContent={'center'}>
      {categori.map((button, index) => (
        <Button key={index} variant={selected === index ? 'contained' : 'outlined'} onClick={() => handleBottonClick(index)}>{button.label}</Button>
      ))}
    </Stack>

  )
}
function Nav() {
  return (
    <nav className="nav-Container">
      <Navigation className="nav-item"></Navigation>
    </nav>
  )
}
function Aside() {
  const { topics } = useDataStore();
  function topiclist() {
    const arr = [];
    for (let topic of topics) {
      arr.push(
        <li className="topic-item"><p className='item'>{topic}</p></li>);
    }
    return arr
  }
  return (
    <aside className="container" id="aside">
      <div className="topic-title">
        <h4>Today Hot Topics</h4>
      </div>
      <div className="topic-list">
        <ol className='rank'>
          {topiclist()}
        </ol>
      </div>
    </aside>
  )
}
function Footer() { }

function Main() {
  return (
    <main className="container" id="main">
      <ArticleContent></ArticleContent>
      <ArticleContent></ArticleContent>
      <ArticleContent></ArticleContent>
      <ArticleContent></ArticleContent>
      <ArticleContent></ArticleContent>
      <ArticleContent></ArticleContent>
    </main>
  )
}
function ArticleContent(props) {
  const { article } = useDataStore();
  let rank = props.rank;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <article className="article-container" onClick={() => { setOpen(true) }}>
        <div className="article-item">
          <span className='article-wrapper'>
            <div className="content">
              <div className="title"><h3>title test</h3></div>
              <div className="main-area">
                <p className="main-area ellipsis">{article}</p>
              </div>
              <div className="time"><p>time</p></div>
            </div>
          </span>
        </div>
        <span className='image-wrapper'><img clsssName='fitimag' src="img\test.jpg" /></span>
      </article>
      <Modal open={open} setOpen={setOpen} />
    </Fragment>
  )
}
function Modal(props) {
  return (
    <Dialog open={props.open}>
      <Stack spacing={1} direction="row">
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogActions>
            <Button onClick={() => { props.setOpen(false) }}>X</Button>
          </DialogActions>
        </DialogContent>
      </Stack>
      <DialogContent>
        <DialogContentText>11</DialogContentText>
      </DialogContent>
    </Dialog>
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
  return (
    <Container fluid maxWidth="lg" className="App">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Header />
        </Grid>
        <Grid item lg={12}>
          <Nav />
        </Grid>
        <Grid item lg={8}>
          <Main />
        </Grid>
        <Grid item lg={4}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  );
}


export default App;
