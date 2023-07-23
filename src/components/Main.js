import React from 'react';
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText }
    from '@mui/material';
import { useState, Fragment } from 'react';
import { useDataStore } from '../store/store';
function Main() {
    const { contents } = useDataStore();
    function ArticleContents() {
        const arr = []
        for (let i = 0; i < contents.length; i++) {
            arr.push(<ArticleContent index={i}></ArticleContent>)
        }
        return arr;
    }
    return (
        <main className="container" id="main">
            {ArticleContents()}
        </main>
    )
}

function ArticleContent(props) {
    const { contents } = useDataStore();
    const [open, setOpen] = useState(false);
    let index = props.index;
    return (
        <Fragment>
            <article className="article-container" onClick={() => { setOpen(true) }}>
                <div className="article-item">
                    <span className='article-wrapper'>
                        <div className="content">
                            <div className="title"><h3>{contents[index].title}</h3></div>
                            <div className="main-area">
                                <p className="main-area ellipsis">{contents[index].article}</p>
                            </div>
                            <div className="time"><p>{contents[index].time}</p></div>
                        </div>
                    </span>
                </div>
                <span className='image-wrapper'><img className='fitimag' src="img\test.jpg" /></span>
            </article>
            <Modal open={open} setOpen={setOpen} index={index} />
        </Fragment>
    )
}
function Modal(props) {
    const { contents } = useDataStore();

    return (
        <Dialog open={props.open}>
            <Stack className="modal-title" spacing={1} direction="row">
                <DialogTitle><h2>{contents[props.index].title}</h2></DialogTitle>
                <DialogContent>
                    <DialogActions className="modal-button">
                        <Button variant="outlined" onClick={() => { props.setOpen(false) }}>Close</Button>
                    </DialogActions>
                </DialogContent>
            </Stack>
            <DialogContent className="modal-content">
                <DialogContentText >{contents[props.index].article}</DialogContentText>
            </DialogContent>
            <DialogContent className="modal-content">
                <DialogContentText >{contents[props.index].time}</DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default Main;