// vue.config.js
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('css', resolve('src/modules/css'))
            .set('js', resolve('src/modules/js'))
            .set('components', resolve('src/components'))
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/index/index.js',
            // 模板来源
            template: 'src/pages/index/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        category: {
            entry: 'src/pages/category/category.js',
            template: 'src/pages/category/category.html',
            filename: 'category.html',
            title: 'category Page',
            chunks: ['chunk-vendors', 'chunk-common', 'category']
        },
        cart: {
            entry: 'src/pages/cart/cart.js',
            template: 'src/pages/cart/cart.html',
            filename: 'cart.html',
            title: 'cart Page',
            chunks: ['chunk-vendors', 'chunk-common', 'cart']
        },
        member: {
            entry: 'src/pages/member/member.js',
            template: 'src/pages/member/member.html',
            filename: 'member.html',
            title: 'member Page',
            chunks: ['chunk-vendors', 'chunk-common', 'member']
        },
        search: {
            entry: 'src/pages/search/search.js',
            template: 'src/pages/search/search.html',
            filename: 'search.html',
            title: 'search Page',
            chunks: ['chunk-vendors', 'chunk-common', 'search']
        },
        goods: {
            entry: 'src/pages/goods/goods.js',
            template: 'src/pages/goods/goods.html',
            filename: 'goods.html',
            title: 'goods Page',
            chunks: ['chunk-vendors', 'chunk-common', 'goods']
        },
    },
    baseUrl: process.env.NODE_ENV === 'production' ?
        '/vue-youzan/dist/' : '/',
}