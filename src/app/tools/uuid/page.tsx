import {Metadata} from "~/next";
import {pageTitle} from "@/utils/page";
import styles from "./page.module.scss";
import React from "react";
import {Button, ButtonGroup} from "@mui/material";

export const metadata: Metadata = {
    title: pageTitle('UUID生成器'),
    description: `快速生成UUID，支持自定义UUID版本、UUID格式等。`,
    keywords: `UUID,UUID生成器,UUID工具,UUID生成`
};

export default async function Home() {
    return <div className={styles.mainContainer}>
        <h1>UUID生成器</h1>
        <p>支持快速生成UUID，支持自定义UUID版本、UUID格式等。</p>
        <p>本页生成的密码不会保持，刷新或关闭页面后消失</p>

        <div>UUID版本：
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>V1</Button>
                <Button>V2</Button>
                <Button>V3</Button>
                <Button>V4</Button>
                <Button>V5</Button>
                <Button>V6</Button>
                <Button>V7</Button>
            </ButtonGroup>
        </div>
        <div>UUID格式：
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>标准UUID</Button>
                <Button>短UUID</Button>
                <Button>ULID</Button>
            </ButtonGroup>
        </div>

    </div>
}
