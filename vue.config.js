<<<<<<< HEAD
module.exports={
    devServer: {
        port:3033,
    },
    productionSourceMap: false
=======

module.exports={
    devServer: {
        port:3033,

        proxy: {
            // 本地接口
            '/api': {
                // target: 'http://localhost:3089/v1',
                // 服务器地址
                target: 'http://118.89.36.145:3089/v1',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            },

        }

    },




    productionSourceMap: false


>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
};
