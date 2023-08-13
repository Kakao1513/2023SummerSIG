import React, { useEffect, useState } from 'react';
import { useDataStore } from './../store/store';
import axios from 'axios';
function Footer() {
    return (
        <div id="wrap">
            <footer>
                <p>
                    <div>Web UI: 20181385 성민제</div>
                    <div>Copyright 2023. kakao1513. All Rights Reservd.</div>
                </p>
            </footer>
        </div>
    )
}
export default Footer;