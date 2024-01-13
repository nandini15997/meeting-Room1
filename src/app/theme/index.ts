import { DefaultTheme } from 'styled-components';
const appTheme: DefaultTheme = {
    colors: {
        primary: {
            fg: "#FFFFFF",
            bg: "#9F0086"
        }
    },
    breakpoints: {
        MOBILE_PORTRAIT_WIDTH: "420px",
        TABLET_LANDSCAPE_WIDTH: "1024px"
    },
    typography: {
        fontFamily: "Helvetica",
        heading: {
            fontSize: "2.25rem",
            fontWeight: 400,
            color: "#222222"
        }
    }
};

export {
    appTheme
};
