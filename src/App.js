import {
  Container,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
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

  return (
    <Container fluid maxWidth="lg" className="App">
      <Grid container spacing={2}>
        <Grid item sm={12} lg={12}>
          <Header />
        </Grid>
        <Grid item sm={12} lg={12}>
          <Nav />
        </Grid>
        <Grid item sm={8} lg={8}>
          <Routes>
            {
              (() => {
                const arr = [];
                for (let i = 0; i < categori.length; i++) {
                  arr.push(
                    <Route exact path={`/${categori[i]}`} element={<Main index={i} />}></Route>
                  )
                }
                return arr;
              })()
            }
          </Routes>
        </Grid>
        <Grid item sm={4} lg={4}>
          <Routes>          {
            (() => {
              const arr = [];
              for (let i = 0; i < categori.length; i++) {
                arr.push(
                  <Route exact path={`/${categori[i]}`} element={<Aside index={i} />}></Route>
                )
              }
              return arr;
            })()
            }
          </Routes>
        </Grid>
        <Grid item sm={12} lg={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}


export default App;
