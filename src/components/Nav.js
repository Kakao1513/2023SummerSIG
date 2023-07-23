import { Button, Stack } from '@mui/material';
import React from 'react';
import {useState} from 'react'

function Navigation() {
    const categori = ["경제", "사회", "정치", "IT/기술", "세계", "생활/문화"]

    const [selected, setSelected] = useState(0);
    function categoris() {
        const arr = []
        for (let i = 0; i < categori.length; i++) {
            arr.push(
                <Button variant={selected === i ? 'contained' : 'outlined'} onClick={() => { setSelected(i) }}>
                    {categori[i]}
                </Button>
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