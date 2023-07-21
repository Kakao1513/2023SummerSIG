import './App.css';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { ToggleButton } from '@mui/material';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useDataStore } from './store/store.js';

function Header() {
  return (
    <header className="App-header">
      <div>
        <h4>네이버 뉴스 요약기</h4>
      </div>
    </header>
  )
}

function Navigation() {
  const [style, setStyle] = useState('outlined');

  const GetClick = (e) => {
    if (style === 'outlined') {
      setStyle('contained');
      setCurrentClick('selected');
    }
    else if (style === 'contained') {
      setStyle('outlined')
      setPrevClick('selected');
    }
  }

  useEffect(
    (e) => {
      if (currentClick !== null) {
        setStyle('contained');
      }

      if (prevClick !== null) {
        setStyle('outlined');
      }
      setPrevClick(currentClick);
    }, [style]);

  return (
    <Stack spacing={1} direction="row" justifyContent={'center'}>
      <Button variant={style} onClick={GetClick}>경제</Button>
      <Button variant={style} onClick={GetClick}>정치</Button>
      <Button variant={style} onClick={GetClick}>IT/기술</Button>
      <Button variant={style} onClick={GetClick}>사회</Button>
      <Button variant={style} onClick={GetClick}>세계</Button>
      <Button variant={style} onClick={GetClick}>생활/문화</Button>
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
  return (
    <aside className="container" id="aside">
      <span className="rank">1</span>
      <span className="topic">test</span>
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
  let rank = props.rank;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <article className="article-container" onClick={() => { setOpen(true) }}>
        <div className="article-item">
          <span><img src="firstsig/public/logo192.png"></img></span>
          <span>
            <div className="content">
              <div className="title"><h3>title test</h3></div>
              <div className="Main-article">
                <article>Qui aimes-tu le mieux, homme enigmatique, dis?ton pere, ta merem ta soeurs, ou ton frere?
                </article>
              </div>
              <div className="time"><p>time</p></div>
            </div>
          </span>
        </div>
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
