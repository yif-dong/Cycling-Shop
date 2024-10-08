// api/index.js
function login(username, password) {
  // 这里可以添加真实的请求逻辑，例如调用后端API
  // 模拟一个成功的登录
  if (username === 'testUser' && password === 'testPass') {
      return { success: true, message: '登录成功！' };
  } else {
      return { success: false, message: '用户名或密码错误！' };
  }
}

module.exports = {
  login,
};
