import Link from 'next/link'
import styles from './navbar.module.scss'
import Image from 'next/image'
import React, {CSSProperties} from "react";
import {UserProfileSelector} from "@/app/partials/profile";
import {loadSessions2} from "@/services/auth";
import {stringToBase58} from "@/utils/basex";
import {PSImage} from "@/components/client/image";
import {SessionModel} from "@/models/session";

export async function PublicNavbar() {
    const sessionList = await loadSessions2()
    return <div className={styles.navHeader}>
        <div className={styles.leftNav}>
            <div>
                <Link className={styles.brandLink} href={'/'}>
                    <Image src='/logo.jpg' alt='logo' fill={true} sizes={'48px,48px'}/>
                </Link>
            </div>
            <UserProfileSelector/>
        </div>
        <div className={styles.rightNav}>
            <UserAction sessionList={sessionList}/>
        </div>
    </div>
}


async function UserAction({sessionList}: { sessionList: SessionModel[] }) {
    const clientAuthUrl = '/' //fullAuthUrl('/')
    return <>
        {
            sessionList.map((session) => {
                const viewerString = stringToBase58(`${session.name}@${session.domain}`)
                const style: CSSProperties = {}
                // if (viewerString === viewer) {
                //     style = {
                //         borderWidth: 2,
                //         borderColor: '#4A95DD',
                //     }
                // }
                const linkUrl = `/content/${viewerString}/channels`
                return <Link className={styles.loginLink} key={session.account.uid} href={linkUrl}>
                    <PSImage src={session.account.image} style={style} alt={session.account.nickname} height={32}
                             width={32}/>
                </Link>
            })
        }
        <Link
            href={clientAuthUrl} rel='nofollow' className={styles.plusLink}>
            <Image src='/icons/navbar/plus.svg' alt='login' height={32} width={32}/>
        </Link>
    </>
}
