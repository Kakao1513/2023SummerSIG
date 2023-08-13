import { Grid } from '@mui/material';
import React from 'react';

function Header() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} className="app-header">
                <h4>네이버 뉴스 요약기</h4>
            </Grid>
        </Grid>
    )
}
export default Header;  