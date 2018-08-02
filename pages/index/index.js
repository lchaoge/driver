Page({
  onShareAppMessage () {
    return {
      title: '物美司机收货',
      imageUrl: '../assets/images/logo.png',
      path: '/page/user?id=123',
      success (res) {
        var shareTickets = res.shareTickets;
        if (shareTickets.length == 0) {
          return false;
        }
        wx.getShareInfo({
          shareTicket: shareTickets[0],
          success (res) {
            var encryptedData = res.encryptedData;
            var iv = res.iv;
          }
        })
      },
      fail (res) {
        // 转发失败
      }
    }
  }
});