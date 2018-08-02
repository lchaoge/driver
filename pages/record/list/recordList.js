const { $Message } = require('../../../dist/base/index');
const network = require('../../assets/js/ajax.js')
Page({
  data:{
    form:{
      carNo: '',
      sieNo: ''
    },
    list:[]
  },
  // 页面加载
  onLoad(options){
    this.setData({
      form:options
    })
    this.queryEvt()
  },
  // 查询列表
  queryEvt () {
    let params = this.data.form
    network.GET({
      params: params,
      API_URL: "https://wd6783237698uedlow.wilddogio.com/users.json",
      success: (res) => {
        let list = []
        for (let key in res.data){
          console.log(res.data[key])
          list.push(res.data[key])
        }
        this.setData({
          list
        })
      },
      fail:() => {
        $Message({content: '系统错误',type: 'error'});
      }
    });
  }
});