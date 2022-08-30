module.exports = {
    // 关闭eslint的校验
    lintOnSave: false,

    // 开启代理：解决跨域，https://cli.vuejs.org/zh/config/#devserver-proxy
    devServer: {
        host: '127.0.0.1',
        port: 8081,
        https: false,
        hotOnly: false,

        // 代理
        proxy: {
            '/chain': {
                target: 'http://localhost',
                ws: true,
                changeOrigin: true,
            },
        },
    },

}
