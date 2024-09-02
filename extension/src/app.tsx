import theme from './theme';
import {ThemeProvider} from "@mui/material";

import RandomPasswordPage from "@/tools/password/random-password.tsx";
import {css} from "@emotion/css";

const styleFullPage = css`
    height: 100vh;
    background-color: #f3f3f3;
`

const styleMainContainer = css`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: #ffffff;
`

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className={styleFullPage}>
                <div className={styleMainContainer}>
                    <RandomPasswordPage/>
                </div>
            </div>
        </ThemeProvider>
    )
}
