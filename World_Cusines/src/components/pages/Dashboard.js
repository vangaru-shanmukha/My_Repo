import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import CardItem from '../molecules/CardItem';

function Dashboard() {
    let recepies = useSelector(state => state.cart.recepies);
    return (
            <Grid item>
                <Grid container justify="flex-start" direction="row" spacing={3}>
                    {recepies.map((recepie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={recepie.id}>
                            <CardItem recepie={recepie} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
    )
}

export default Dashboard;