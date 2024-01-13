// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fontFamily: string;
            heading: {
                fontWeight: number | string;
                fontSize: string;
                color: string;
            };
        };
        colors: {
           primary: {
               fg: string;
               bg: string;
           }
        };
        breakpoints: {
            MOBILE_PORTRAIT_WIDTH: string;
            TABLET_LANDSCAPE_WIDTH: string;
            // sm: string;
            // md: string;
            // lg: string;
            // xl: string;
        };

    }
}