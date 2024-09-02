import {randomPassword} from '@/utils/rand'
import {useState} from 'react'
import {passwordStrength} from '@cmss/check-password-strength'
import {copyToClipboard} from "@/utils/clipboard";
import {IconButton, Tooltip} from "@mui/material";
import {ContentCopy} from "@mui/icons-material";
import {css} from "@emotion/css";

const styleRandomPassword = css`
    background: #FFFFFF;
    padding: 16px;
    border-radius: 4px;
    width: 960px;
    margin: 0 auto;
`

const styleSymbolRow = css`
    margin-bottom: 8px;
`
const styleToolTitle = css`
    margin-top: 0`

const classToolDesc = css`
    font-size: 13px;
    color: #5c5c5c;`
const classGenPassword = css`
    font-size: 20px;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
`
const classPasswordItem = css`

    color: #000;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
`

export default function RandomPasswordPage() {
    const [password, setPassword] = useState<string>('')
    const [length, setLength] = useState<number>(16)
    const [passwordHistory, setPasswordHistory] = useState<string[]>([])
    const [allowLetter, setAllowLetter] = useState<boolean>(true)
    const [allowUppercaseLetter, setAllowUppercaseLetter] = useState<boolean>(true)
    const [allowSymbol, setAllowSymbol] = useState<boolean>(true)
    const [allowNumber, setAllowNumber] = useState<boolean>(true)

    const renderPassword = () => {
        if (password.length < 1) {
            return <span></span>
        }
        return <>
            <h2>生成的密码</h2>
            <div className={classGenPassword} title={'长度' + String(password.length)}>
                <CopyIcon password={password}/> {password} <PasswordStrength password={password}/>
            </div>
        </>
    }
    const renderHistory = () => {
        if (passwordHistory.length < 1) {
            return <span></span>
        }
        const historyList = passwordHistory.map(pwd => {
            return <div key={pwd} title={'长度' + String(pwd.length)} className={classPasswordItem}>
                <CopyIcon password={pwd}/> {pwd} <PasswordStrength password={pwd}/>
            </div>
        })
        return <>
            <h2>历史密码</h2>
            {historyList}
        </>
    }
    return <div>
        <div className={styleRandomPassword}>
            <div>
                <h2 className={styleToolTitle}>随机密码生成器</h2>
                <p className={classToolDesc}>本页生成的密码不会保持，刷新或关闭页面后消失</p>
            </div>
            <div className={styleSymbolRow}>
                <label>
                    <input type={'checkbox'} checked={allowLetter} title={'a-z'} onChange={(event) => {
                        console.debug('radio', event.target.checked)
                        setAllowLetter(event.target.checked)
                    }}/>
                    小写字母
                </label>
                <label>
                    <input type={'checkbox'} title={'A-Z'} checked={allowUppercaseLetter} onChange={(event) => {
                        setAllowUppercaseLetter(event.target.checked)
                    }}/>
                    大写字母
                </label>
                <label>
                    <input type={'checkbox'} title={'0-9'} checked={allowNumber} onChange={(event) => {
                        setAllowNumber(event.target.checked)
                    }}/>
                    数字
                </label>
                <label>
                    <input type={'checkbox'} title={'@#$...'} checked={allowSymbol} onChange={(event) => {
                        setAllowSymbol(event.target.checked)
                    }}/>
                    特殊字符
                </label>
            </div>
            <div className={styleSymbolRow}>
                <input value={length} className={'fx-input'}
                       onChange={(event) => {
                           setLength(Number(event.target.value))
                       }} title={'密码长度'} type={'number'} min={4} max={64}/>
            </div>
            <div className={'calc-row'}>
                <button className={'btn btn-sm mb-2'} onClick={() => {
                    const options = {
                        number: allowNumber,
                        letter: allowLetter,
                        uppercaseLetter: allowUppercaseLetter,
                        symbol: allowSymbol
                    }
                    const realLength = length < 2 ? 2 : (length > 64 ? 64 : length)
                    const password = randomPassword(realLength, options)

                    setPassword(password)
                    const history = passwordHistory.slice(0, 15)
                    history.splice(0, 0, password)
                    setPasswordHistory(history)
                }}>点击生成
                </button>
            </div>
            <div>
                {renderPassword()}
            </div>
            <div>
                {renderHistory()}
            </div>
        </div>
    </div>
}

function CopyIcon({password}: { password: string }) {
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)

    return <Tooltip title={message} open={open} arrow>
        <IconButton aria-label="copy" size="small"
                    onClick={() => {
                        copyToClipboard(password).then(() => {
                            setMessage('success')
                        }).catch(() => {
                            setMessage('failed')
                        })
                        setOpen(true)
                        setTimeout(() => {
                            setOpen(false)
                        }, 1000)
                    }}>
            <ContentCopy fontSize={'inherit'}/>
        </IconButton>
    </Tooltip>
}

function PasswordStrength({password}: { password: string }) {
    const strength = passwordStrength(password).value.toLowerCase()

    if (strength === 'strong') {
        return <div className="badge badge-sm badge-success text-white text-xs">
            {strength}
        </div>
    }
    if (strength === 'medium') {
        return <div
            className="badge badge-sm badge-info text-white text-xs">
            {strength}
        </div>
    }
    if (strength === 'weak') {
        return <div className="badge badge-sm badge-warning text-white text-xs">
            {strength}
        </div>
    }

    return <div className="badge badge-sm badge-error text-white text-xs">
        {strength}
    </div>

}
