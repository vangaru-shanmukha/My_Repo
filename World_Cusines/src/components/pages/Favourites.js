import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import CardItem from '../molecules/CardItem';

function Favourites() {
    let favourites = useSelector(state => state.cart.favourites);
    return (
            <Grid item>
                { favourites.length > 0 && (
                <Grid container justify="flex-start" direction="row" spacing={3}>
                    {favourites.map((favourite) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={favourite.id}>
                            <CardItem recepie={favourite} />
                        </Grid>
                    ))}
                </Grid>)}
                {
                    favourites.length === 0 && (
                        <Grid container justify="center" style={{ minHeight: "80vh" }} alignItems="center">
                            <Grid item>
                                <Typography variant="h5">Visit dashboard to explore more recepies!!!!</Typography>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
    )
}

export default Favourites;