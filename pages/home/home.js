/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-01 09:49:04
 * @LastEditors: xiang
 * @LastEditTime: 2019-11-01 14:53:08
 */
// pages/home/home.js
import { Theme } from '../../model/theme.js';
import { Banner } from '../../model/banner.js';
import { Category } from '../../model/category.js';
Page({


  data: {
    themeA: null,
    bannerB: null,
    categoryC: null

  },
  onLoad() {
    this.initAllData()
  },

  async initAllData() {
    const themeA = await Theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    const categoryC = await Category.getHomeLocationC()
    this.setData({
      bannerB,
      categoryC,
      themeA: themeA[0]
    })
  }

})