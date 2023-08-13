import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose'
function Main(props) {
    const [contents, setContents] = useState([]);
    async function getContents() {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data);
                setContents(response.data);
            })
            .catch((reject) => {
                console.log(reject);
            })
    }
    useEffect(() => {
        getContents()
    }, []);
    console.log(contents);
    function ArticleContents() {
        const arr = []
        for (let i = 0; i < contents.length; i++) {
            arr.push(<Grid item sx={{ ml: 1, pr: -1 }}><ArticleContent contents={contents} index={i}></ArticleContent></Grid>)
        }
        return arr;
    }
    return (
        <Grid container sx={{ pt: 2, pb: 2, pr: 1.5, pl: 1.5 }} className="container" id="main">
            {ArticleContents()}
        </Grid>
    )
}

function ArticleContent(props) {
    const contents = props.contents;
    const [open, setOpen] = useState(false);
    let index = props.index;
    return (
        <Fragment>
            <Grid container spacing={1} className="article-container" onClick={() => { setOpen(true) }}>
                <Grid item xs={9} className="article-item">
                    <Grid container columns={3} className='article-wrapper'>
                        <Grid item component='div' style={{ height: 'auto' }} xs={12} className="title"><h3>
                            <LinesEllipsis text={contents[index].title} maxLine='1' ellipsis='...' basedOn='letters' /></h3></Grid>
                        <Grid item component='div' xs={{ whiteSpace: 'nowrap', }}>
                            <LinesEllipsis text={contents[index].body} maxLine='3' ellipsis='...' basedOn='letters' />
                        </Grid>
                        <Grid item xs={12} className="time"><p>{contents[index].id}</p></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} className='img-wrapper'><img className='fitimg' src="img\test.jpg" /></Grid>
            </Grid>
            <Modal open={open} setOpen={setOpen} index={index} contents={contents} />
        </Fragment >
    )
}
function Modal(props) {
    const contents = props.contents;
    let index = props.index;
    return (
        <Dialog open={props.open}>
            <Grid container spacing={1} sx={{ p: 1 }}>
                <Grid item sm={10} lg={10} style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                    <DialogTitle><h3>{contents[index].title}</h3></DialogTitle>
                </Grid>
                <Grid sm={2} lg={2}>
                    <DialogContent>
                        <DialogActions>
                            <IconButton size='small' color='primary' variant="text" onClick={() => { props.setOpen(false) }}><CloseIcon /> </IconButton>
                        </DialogActions>
                    </DialogContent>
                </Grid>
                <Grid sm={12} lg={12}>
                    <DialogContent style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }} className="modal-content">
                        <DialogContentText >{contents[index].body}</DialogContentText>
                    </DialogContent>
                    <DialogContent className="modal-content">
                        <DialogContentText >{contents[index].id}</DialogContentText>
                    </DialogContent>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default Main;