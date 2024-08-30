import React from 'react'
import styles from './page.module.scss'
import {PublicNavbar} from './partials/navbar'
import Image from 'next/image'
import {lerpServer} from '@/services/server/wasm-server'
import {ToolBody} from "@/app/tools/tool";

export default async function Home({searchParams}: {
    searchParams: Record<string, string>
}) {
    console.debug('searchParams:', searchParams)
    const a = lerpServer(1, 2, 0.5)
    console.debug('axxxx server:', a)
    return <div className={styles.fullPage}>
        <div>
            <PublicNavbar/>
        </div>
        <div className={styles.mainContainer}>
            <ToolBody/>
        </div>
    </div>
}
