/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-01 10:12:04
 * @LastEditors: xiang
 * @LastEditTime: 2019-11-01 11:19:40
 */
import { config } from "../pages/config/config";
import { promisic } from "./util";

class Http {
    static async request({ url, data, method = "GET" }) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data
    }
}

export {
    Http
}