// pages/user/user.js
const api = require('../../api/index.js');


Page({
    data: {
        message: '',
    },

    onLogin: function (e) {
        const { username, password } = e.detail.value;

        const result = api.login(username, password);
        this.setData({
            message: result.message,
        });

        if (result.success) {
            // 登录成功后的处理，比如跳转到主页
            wx.redirectTo({
                url: '/pages/home/home',  // 修改为实际主页路径
            });
        }
    },
});
