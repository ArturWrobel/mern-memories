import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, AppBar } from '@material-ui/core'
import useStyles from './styles'
import memories from '../../images/memories.png';

export default function Navbar() {

    const classes = useStyles(

    )
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
        </AppBar>
    )
}