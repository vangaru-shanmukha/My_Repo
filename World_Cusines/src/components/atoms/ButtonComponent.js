import React from 'react';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#169E3F",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#DE1515",
            contrastText: "#FFFFFF"
        },
    }
});

function ButtonComponent(props) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant={props.variant} color={props.color} onClick={props.onClick}>
                {props.text}
            </Button>
        </ThemeProvider>
    )
}

export default ButtonComponent;