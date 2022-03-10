import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";



export const theme = createTheme({
    palette: {
        primary: {
            main: "#5552ae",

        },
        secondary: {
            main: "#6b3492"
        },
        success: {
            main: green[500]
        },
        background: "#03020a"
    }
});

