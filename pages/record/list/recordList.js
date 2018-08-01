Page({
  data:{
    form:{
      carNo: '',
      sieNo: ''
    }
  },
  // 页面加载
  onLoad(options){
    console.log("数据"+options)
    this.form = options
    this.queryEvt()
  },
  // 查询列表
  queryEvt () {
    const requestTask = wx.request({
      url: 'https://wd8489702998bihasp.wilddogio.com/user.json', //仅为示例，并非真实的接口地址
      data: this.form,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
});