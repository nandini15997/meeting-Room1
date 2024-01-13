import React from "react";
import {AppRouter} from "./config/routes";
import {ThemeProvider} from "styled-components";
import {appTheme} from "./theme";
import {GlobalStyle} from "./styles/global";
import {PageContainer} from "./shared/layouts/page-container.styles";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <GlobalStyle/>
            <PageContainer>
                <AppRouter/>
            </PageContainer>
        </ThemeProvider>
    );
};

export {App};