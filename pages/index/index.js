
Page({
  data: {
    value:" ",
    swiperoptions:{
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:1000
    },
  },
  onLoad(){

  },
  /**
     * 点击搜索框获取焦点
     */
    clickSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
  }
})