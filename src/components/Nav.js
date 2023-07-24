import { Button, Stack } from '@mui/material';
import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDataStore } from '../store/store';

function Navigation() {
    const name = ["경제", "정치", "IT/기술", "사회", "세계", "생활/문화"]
    const { categori } = useDataStore();
    const [selected, setSelected] = useState(0);
    function categoris() {
        const arr = []
        for (let i = 0; i < categori.length; i++) {
            arr.push(
                <Link to={`/${categori[i]}`}>
                    <Button variant={selected === i ? 'contained' : 'outlined'} onClick={() => { setSelected(i) }}>
                        {name[i]}
                    </Button>
                </Link>
            )
        }
        return arr
    }
    return (
        <Stack spacing={1} direction="row" justifyContent={'center'}>
            {categoris()}
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

export default Nav;