/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-01 10:04:41
 * @LastEditors: xiang
 * @LastEditTime: 2019-11-01 11:00:14
 */
import { Http } from "../utils/http";

class Theme {
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: "t-1"
            }
        })
    }
}

export {
    Theme
}