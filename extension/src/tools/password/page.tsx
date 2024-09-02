import RandomPasswordPage from './random-password'
import {css} from "@emotion/css";

const stylePage = css`
        width: 1024px;
        margin: 0 auto;
        padding-top: 16px;
        padding-bottom: 16px;
        overflow-y: auto;
`

export default async function Home() {
    return <div className={stylePage}>
        <RandomPasswordPage/>
    </div>
}
