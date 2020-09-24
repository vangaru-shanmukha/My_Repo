import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Grid } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import history from '../utils/history';

function Appbar(props) {
    const favouriteHandler = () => {
        history.push("/favourites")
    }
    const homeHandler = () => {
        history.push("/")
    }
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h6" onClick={homeHandler}>
                            World Cusines
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton edge="end" color="inherit" onClick={favouriteHandler}>
                            <Badge badgeContent={props.notifications} color="secondary">
                                <LibraryBooksIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;