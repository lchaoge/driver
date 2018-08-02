const { $Message } = require('../../../dist/base/index');
const network = require('../../assets/js/ajax.js')
Page({
  data:{
    form:{
      carNo: '',
      siteNo: ''
    }
  },
  // 页面加载
  onLoad(options) {
    this.setData({
      form: {
        carNo:'',
        siteNo:''
      }
    })
  },
  carNoChangeEvt(e){
    this.setData({
      'form.carNo': e.detail.detail.value
    })
  },
  siteNoChangeEvt(e){
    this.setData({
      'form.siteNo': e.detail.detail.value
    })
  },
  // 跳转页面
  queryEvt () {
    if(this.data.form.carNo === ''){
      $Message({
        content: '请输入车牌号',
        type: 'error'
      });
    }else{
      let params = this.data.form
      network.GET({
        params: params,
        API_URL: "https://wd6783237698uedlow.wilddogio.com/users.json",
        success: (res) => {
          if(res){
            wx.navigateTo({
              url: '../list/recordList?carNo=' + this.data.form.carNo + '&siteNo=' + this.data.form.siteNo
            })
          }
        },
        fail:()=>{
          $Message({ content: '系统错误', type: 'error' });
        }
      });
    }
  }


});