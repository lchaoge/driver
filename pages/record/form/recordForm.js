Page({
  data:{
    form:{
      carNo: '',
      siteNo: ''
    }
  },
  // 跳转页面
  queryEvt () {
    wx.redirectTo({
      url: '../list/recordList?carNo=' + this.data.form.carNo + '&siteNo=' + this.data.form.siteNo
    })
  }
});