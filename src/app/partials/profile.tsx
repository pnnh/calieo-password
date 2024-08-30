import React, {CSSProperties} from "react";
import styles from './profile.module.css'
import Link from "next/link";
import {getPathname} from "@/services/server/pathname";

export function UserProfileSelector() {
    const pathname = getPathname()

    const siteLinks = [
        {name: '工具', href: '/'}
    ]

    return <>
        <div className={styles.roleButtonContainer}>
            {
                siteLinks.map((link) => {
                    let style: CSSProperties = {}
                    if (pathname === link.href) {
                        style = {
                            color: '#4A95DD',
                        }
                    }
                    return <Link key={link.name} className={styles.siteLink} style={style} href={link
                        .href}>{link.name}</Link>
                })
            }
        </div>
        <ArticleNavbar pathname={pathname}/>
    </>
}

function ArticleNavbar({pathname}: { pathname: string }) {
    if (pathname === '/') {
        return <></>
    }
    const navLinks = [
        {name: '随机密码', href: `/tools/password`},
    ]
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#C6C6C6">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        </svg>
        {navLinks.map((link) => {
            let style: CSSProperties = {}
            if (pathname === link.href) {
                style = {
                    color: '#4A95DD',
                }
            }
            return <Link key={link.name} className={styles.navLink} style={style} href={link.href}>{link.name}</Link>
        })}
    </>
}
