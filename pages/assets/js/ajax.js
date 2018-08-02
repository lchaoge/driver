var requestHandler = {
  params: {},
  API_URL: '',
  token: '',
  success: (res)=>{
    // success  
  },
  fail: ()=>{
    // fail  
  },
}

//GET请求  
function GET(requestHandler) {
  request('GET', requestHandler)
}
//POST请求  
function POST(requestHandler) {
  request('POST', requestHandler)
}

function request(method, requestHandler) {
  //注意：可以对params加密等处理  
  var params = requestHandler.params;
  var API_URL = requestHandler.API_URL;
  wx.request({
    url: `${API_URL}`,
    data: params,
    method: method,
    header: {
      'content-type': 'application/json',
    }, // 设置请求的 header  
    success: (res)=>{
      //注意：可以对参数解密等处理  
      requestHandler.success(res)
    },
    fail:()=>{
      requestHandler.fail()
    },
    complete:()=>{
      // complete  
    }
  })
}

module.exports = {
  GET: GET,
  POST: POST
}  