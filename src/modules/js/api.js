let url = {
    hotLists: '/index/hotLists',
    banner: '/index/banner',
    topList: '/category/topList',
    subList1: '/category/subList1',
    subList2: '/category/subList2',
    subList3: '/category/subList3',
    rank: '/category/rank',
    searchList: '/search/list',
    details: '/goods/details',
    deal: '/goods/deal',
    addCart: '/cart/add',
    cartLists: '/cart/list',
    cartReduce: '/cart/reduce',
    cartRemove: '/cart/remove',
    cartMremove: '/cart/mremove',
    cartUpdate: '/cart/update',
    addressLists: '/address/list',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault',
}







let host = 'https://www.easy-mock.com/mock/5b332b95f384324226646940/youzan'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url