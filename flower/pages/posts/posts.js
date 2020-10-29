// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:"2020LPL夏季观后赛指南",
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload");
    var content = [{
      title: "2020LPL夏季赛季后赛观赛指南",
      content: "8月9号, LPL常规赛收官之战结束，在事关季后赛",
      date:"Nov 12 2020",
      imgSrc:"/images/lpl.png",
      reading:102,
      detail:"8月9号, LPL常规赛收官之战结束，在事关季后赛",
      dataNum:{
        collection:92,
        reading:102,
      },
      dateTime:"24小时前",
      headImgSrc:"/images/lpl.png",
      author:"喵喵喵",
      avatar:"/images/avatar/5.png",
      postId:3,
    },
    {
      title: "小程序学习",
      content: "8月9号, 小程序学习",
      date:"Nov 11 2021",
      imgSrc:"/images/lpl.png",
      reading:102,
      detail:"88月9号, 小程序学习",
      dataNum:{
        collection:59,
        reading:82,
      },
      dateTime:"14小时前",
      headImgSrc:"/images/lpl.png",
      author:"汪汪汪",
      avatar:"/images/avatar/5.png",
      postId:3,
    }
  ]
    this.setData({a:333});
    this.setData({
      posts:content
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
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