// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 500,
    item: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载轮播图
    this.requestCarouselListData();
  },
  // 轮播图代码
  requestCarouselListData() {
    // 调用默认环境数据库的引用
    const db = wx.cloud.database()
    const banner = db.collection('tables')
    //promise
    banner.get().then(res => {
        this.setData({
          item: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})