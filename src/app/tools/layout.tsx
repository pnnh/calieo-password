import React from 'react'
import {PublicNavbar} from "@/app/partials/navbar"
import styles from './layout.module.css'

export default async function ToolsLayout({children}: { children: React.ReactNode }) {
    return <div>
        <div>
            <PublicNavbar/>
        </div>
        <div className={styles.layoutBody}>
            {children}
        </div>
    </div>
}
