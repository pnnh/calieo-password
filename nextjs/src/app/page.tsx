import React from 'react'
import styles from './page.module.scss'
import RandomPasswordPage from "@/app/tools/password/random-password";

export default async function Home({searchParams}: {
    searchParams: Record<string, string>
}) {
    return <div className={styles.fullPage}>
        <div className={styles.mainContainer}>
            <RandomPasswordPage/>
        </div>
    </div>
}
