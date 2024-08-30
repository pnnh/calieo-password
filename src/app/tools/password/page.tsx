import React from 'react'
import styles from './page.module.scss'
import RandomPasswordPage from './random-password'
import {Metadata} from "next";
import {pageTitle} from "@/utils/page";

export const metadata: Metadata = {
    title: pageTitle('随机密码生成器'),
    description: `方便的生成随机密码或是随机字符串，支持自定义密码长度、密码字符集、密码个数等。`,
    keywords: `随机密码,密码生成器,密码工具,密码生成,密码`
};

export default async function Home() {
    return <div className={styles.indexPage}>
        <RandomPasswordPage/>
    </div>
}
