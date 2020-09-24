import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, Dialog, DialogTitle, DialogContent, DialogActions, Slide } from '@material-ui/core';
import ButtonComponent from '../atoms/ButtonComponent';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        maxWidth: 350
    },
    image: {
        objectFit: "contain"
    }
}));

const theme = createMuiTheme({
    overrides: {
        MuiCard: {
            root: {
                display: "flex",
                flexDirection: "column"
            }
        },
        MuiCardActions: {
            root: {
                marginTop: "auto"
            }
        },
        MuiTypography: {
            h5: {
                color: "#000000"
            },
            body1: {
                color: "#000000"
            }
        }
    }
})

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CardItem(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root} key={props.recepie.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={props.recepie.image}
                        className={classes.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.recepie.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.recepie.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {props.recepie.isFavourite === false ?
                        (<ButtonComponent
                            variant="contained"
                            color="primary"
                            text="ADD TO CART"
                            onClick={() => dispatch(addToFavourites(props.recepie.id))} />) :
                        (<ButtonComponent
                            variant="contained"
                            color="secondary"
                            text="REMOVE FROM CART"
                            onClick={() => dispatch(removeFromFavourites(props.recepie.id))} />)}
                    {Object.keys(props.recepie.preparation).length > 0 && (
                        <>
                            <ButtonComponent variant="outlined" color="primary" text="SEE MORE" onClick={handleClickOpen} />
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">{props.recepie.name}</DialogTitle>
                                <DialogContent>
                                    <Typography display="inline" variant="h5">Time : </Typography>
                                    <Typography display="inline" variant="body1">{props.recepie.preparation.time}</Typography>
                                    {props.recepie.preparation.ingredients.length > 0 && (
                                        <>
                                            <Typography variant="h5">Ingredients :</Typography>
                                            {props.recepie.preparation.ingredients.map((ingredient, index) => (
                                                <Typography variant="body1" key={index}>{index+1}. {ingredient}</Typography>
                                            ))}
                                        </>
                                    )}
                                    {props.recepie.preparation.procedure.length > 0 && (
                                        <>
                                            <Typography variant="h5">Procedure :</Typography>
                                            {props.recepie.preparation.procedure.map((step, index) => (
                                                <Typography variant="body1" key={index}>{index+1}. {step}</Typography>
                                            ))}
                                        </>
                                    )}
                                </DialogContent>
                                <DialogActions>
                                    <ButtonComponent variant="outlined" onClick={handleClose} color="secondary" text="CLOSE"/>
                                </DialogActions>
                            </Dialog>
                        </>)}
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}

export default CardItem;