import {base64url} from 'rfc4648'
import {parse as uuidParse, v4 as uuidv4} from 'uuid';
import {base58xrp,} from '@scure/base';
import md5 from "md5";

/**
 * 将字符串转换为base58编码的字符串
 * @param data - 待编码的字符串
 * @returns base58编码的字符串
 */
export function stringToBase58(data: string): string {
    const enc = new TextEncoder()
    return base58xrp.encode(enc.encode(data))
}

/**
 * 将base58编码的字符串转换为字符串
 * @param data - 待解码的base58编码的字符串
 * @returns 解码后的字符串
 */
export function base58ToString(data: string): string {
    const dec = new TextDecoder()
    return dec.decode(base58xrp.decode(data))
}
