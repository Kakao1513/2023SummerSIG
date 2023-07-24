import {
  Container, Grid,
} from '@mui/material';
import './App.css';
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { useDataStore } from './store/store'
import { Route, Routes } from 'react-router-dom';

function App() {
  const { categori } = useDataStore();
  function main() {
    const arr = [];
    for (let i = 0; i < categori.length; i++) {
      arr.push(
        <Route exact path={`/${categori[i]}`} element={<Main index={i} />}></Route>
      )
    }
    return arr;
  }
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
          <Routes>
            <Route exact path="/" element={<Main index={0} />}></Route>
            {main()}
          </Routes>

        </Grid>
        <Grid item lg={4}>
          <Aside />
        </Grid>
        <Grid item lg={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}


export default App;
