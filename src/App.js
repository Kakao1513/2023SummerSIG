import './App.css';
import {
 Container, Grid,
} from '@mui/material';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useDataStore } from './store/store';
import { Link } from 'react-router-dom';
import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
function Footer() { }

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
