let url = {
    hotLists: '/index/hotLists',
}

// 开发环境和真实环境的切换

let host = 'https://www.easy-mock.com/mock/5b332b95f384324226646940/youzan'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url