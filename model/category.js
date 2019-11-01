/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-01 14:49:34
 * @LastEditors: xiang
 * @LastEditTime: 2019-11-01 14:51:41
 */
import { Http } from "../utils/http";

class Category {
    static async getHomeLocationC() {
        Http.request({
            url: `category/grid/all`
        })
    }
}

export {
    Category
}