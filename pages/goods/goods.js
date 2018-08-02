const { $Message } = require('../../dist/base/index');
const network = require('../assets/js/ajax.js')
Page({
  data: {
    searchValue: '', // 搜索内容
    list:[], //列表
    isSearch:false, // 是否搜索
    isSubmit:false, // 是否确定收货
    visible: false,
    actions: [
      {
        name: '确定',
        color: '#ed3f14'
      }
    ]
  },
  submitOpen() {
    this.setData({
      visible: true
    });
  },
  submitCancel() {
    this.setData({
      visible: false
    });
  },
  submitClick() {
    const action = [...this.data.actions];
    action[0].loading = true;

    this.setData({
      actions: action
    });
    // ajax
    let params = this.data.searchValue
    network.GET({
      params: params,
      API_URL: "https://wd6783237698uedlow.wilddogio.com/users.json",
      success: (res) => {
        if (res) {
          action[0].loading = false;
          this.setData({
            isSubmit:true,
            visible: false,
            actions: action
          });
          $Message({
            content: '确认成功！',
            type: 'success'
          });
        }
      },
      fail: () => {
        $Message({ content: '系统错误', type: 'error' });
      }
    });
  },
  // 打电话
  calling(e) {
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: '88259310',
      success () {
        console.log("拨打电话成功！")
      },
      fail () {
        console.log("拨打电话失败！")
      }
    })
  },
  // 搜索内容更新
  searchInputEvt(e){
    this.setData({
      searchValue:e.detail.value
    })
  },
  // 搜索
  searchEvt(){
    if (this.data.searchValue === '') {
      $Message({content: '请输入车牌号',type: 'error'});
    } else {
      let params = this.data.searchValue
      network.GET({
        params: params,
        API_URL: "https://wd6783237698uedlow.wilddogio.com/users.json",
        success: (res) => {
          if (res) {
            let list = []
            for (let key in res.data){
              list.push(res.data[key])
            }
            this.setData({
              isSearch:true,
              list
            })
          }
        },
        fail: () => {
          $Message({ content: '系统错误', type: 'error' });
        }
      });
    }
  },

});