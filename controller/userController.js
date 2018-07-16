
function getData(code, message, data) {
  return {
    code, message, data
  }
}

let userLogin = (ctx) => {
  let body = ctx.request.body;

  let isValid = body.username === 'elys' && body.password === '123'; // 校验

  if(isValid) {
    ctx.response.body = getData(0, '登录成功', {
      token: 'effective_token'
    })
  } else {
    ctx.response.body = getData(-1, '登录失败', {
      token: 'invalid_token'
    })
  }
  
}

module.exports = {
  userLogin
}