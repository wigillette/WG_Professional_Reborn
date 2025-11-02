import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: '#161614',
        },
        primary: {
            main: '#1e90ff',
        },
        secondary: {
            main: '#161614',
        },
        tertiary: {
            main: '#191919',
        },
        error: {
            main: '#D72A2A',
        },
        warning: {
            main: '#FC7B09',
        },
        info: {
            main: '#1e90ff',
        },
        success: {
            main: '#09FE00',
        },
        text: {
            primary: '#1e90ff',
            secondary: '#FFFFFF',
        },
    }
}));

export default theme;