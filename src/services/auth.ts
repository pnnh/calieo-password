import 'server-only'
import axios from '~/axios'
import {serverConfig} from './server/config'
import {cookies} from 'next/headers'
import {SessionModel} from "@/models/session";

export async function loadSessions2() {
    const sessionList: SessionModel[] = []

    // const domainConfig = parseInitialDomains()
    // for (const name in domainConfig) {
    //     if (!Object.prototype.hasOwnProperty.call(domainConfig, name) || !domainConfig[name].anonymous) {
    //         continue
    //     }
    //     const userToken = stringToBase58(`anonymous@${name}`)
    //     const accountModel = await trySigninDomain(userToken)?.makeGet<AccountModel>('/account/information')
    //     if (accountModel) {
    //         sessionList.push({
    //             account: accountModel,
    //             name: accountModel.urn,
    //             token: userToken,
    //             domain: name,
    //         })
    //     }
    // }
    return sessionList
}
