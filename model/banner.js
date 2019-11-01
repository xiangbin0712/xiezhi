/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-01 11:43:54
 * @LastEditors: xiang
 * @LastEditTime: 2019-11-01 12:10:06
 */
import { Http } from "../utils/http"
class Banner {
    static locationB = 'b-1'
    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`

        })
    }
}

export {
    Banner
}