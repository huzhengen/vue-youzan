import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import axios from 'axios'
import mixin from 'js/mixin.js'
import url from 'js/api.js'
import Volecity from 'velocity-animate'

new Vue({
    el: '.container',
    data: {
        lists: null,
        total: 0,
        edittingShop: null,
        edittingShopIndex: -1,
        removePopup: false,
        removeData: null,
        removeMsg: '',
    },
    computed: {
        allSelected: {
            get() {
                if (this.lists && this.lists.length) {
                    return this.lists.every(shop => {
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal) {
                this.lists.forEach(shop => {
                    shop.checked = newVal
                    shop.goodsList.forEach(good => {
                        good.checked = newVal
                    })
                })
            }
        },
        allRemoveSelected: {
            get() {
                if (this.edittingShop) {
                    return this.edittingShop.removeChecked
                }
                return false
            },
            set(newVal) {
                if (this.edittingShop) {
                    this.edittingShop.removeChecked = newVal
                    this.edittingShop.goodsList.forEach(good => {
                        good.removeChecked = newVal
                    })
                }
            },
        },
        selectedLists() {
            if (this.lists && this.lists.length) {
                let arr = []
                let total = 0
                this.lists.forEach(shop => {
                    shop.goodsList.forEach(good => {
                        if (good.checked) {
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        },
        removeLists() {
            if (this.edittingShop) {
                let arr = []
                this.edittingShop.goodsList.forEach(good => {
                    if (good.removeChecked) {
                        arr.push(good)
                    }
                })
                return arr
            }
            return []
        },
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            axios.get(url.cartLists).then(res => {
                let lists = res.data.cartList
                lists.forEach(shop => {
                    shop.checked = true
                    shop.removeChecked = false
                    shop.editting = false
                    shop.edittingMsg = '编辑'
                    shop.goodsList.forEach(good => {
                        good.checked = true
                        good.removeChecked = false
                    })
                })
                this.lists = lists
            })
        },
        selectGood(shop, good) {
            let attr = this.edittingShop ? 'removeChecked' : 'checked'
            good[attr] = !good[attr]
            shop[attr] = shop.goodsList.every(good => {
                return good[attr]
            })
        },
        selectShop(shop) {
            let attr = this.edittingShop ? 'removeChecked' : 'checked'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good => {
                good[attr] = shop[attr]
            })
        },
        selectAll() {
            let attr = this.edittingShop ? 'allRemoveSelected' : 'allSelected'
            this[attr] = !this[attr]
        },
        edit(shop, shopIndex) {
            shop.editting = !shop.editting
            shop.edittingMsg = shop.editting ? '完成' : '编辑'
            this.lists.forEach((item, i) => {
                if (shopIndex !== i) {
                    item.editting = false
                    item.edittingMsg = shop.editting ? '' : '编辑'
                }
            })
            this.edittingShop = shop.editting ? shop : null
            this.edittingShopIndex = shop.editting ? shopIndex : -1
        },
        reduce(good) {
            if (good.number === 1) return
            axios.post(url.cartReduce, {
                id: good.id,
                number: 1
            }).then(res => {
                good.number -= 1
            })
        },
        add(good) {
            axios.post(url.cartUpdate, {
                id: good.id,
                number: 1
            }).then(res => {
                good.number += 1
            })
        },
        remove(shop, shopIndex, good, goodIndex) {
            this.removePopup = true
            this.removeData = { shop, shopIndex, good, goodIndex }
            this.removeMsg = '确定要删除该商品吗？'
        },
        removeList() {
            this.removePopup = true
            this.removeMsg = `确定将所选 ${this.removeLists.length} 个商品删除？`
        },
        removeConfirm() {
            if (this.removeMsg === '确定要删除该商品吗？') {
                let { shop, shopIndex, good, goodIndex } = this.removeData
                axios.post(url.cartRemove, {
                    id: good.id,
                }).then(res => {
                    shop.goodsList.splice(goodIndex, 1)
                    if (!shop.goodsList.length) {
                        this.lists.splice(shopIndex, 1)
                        this.removeShop()
                    }
                    this.removePopup = false
                })
            } else {
                let ids = []
                this.removeLists.forEach(good => {
                    ids.push(good.id)
                })
                axios.post(url.cartMremove, {
                    ids
                }).then(res => {
                    let arr = []
                    this.edittingShop.goodsList.forEach(good => {
                        let index = this.removeLists.findIndex(item => {
                            return item.id == good.id
                        })
                        if (index === -1) {
                            arr.push(good)
                        }
                    })
                    if (arr.length) {
                        this.edittingShop.goodsList = arr
                    } else {
                        this.lists.splice(this.edittingShopIndex, 1)
                        this.removeShop()
                    }
                    this.removePopup = false
                })
            }
        },
        removeShop() {
            this.edittingShop = null
            this.edittingShopIndex = -1
            this.lists.forEach(shop => {
                shop.editting = false
                shop.edittingMsg = '编辑'
            })
        },
        start(e, good){
            good.startX = e.changedTouches[0].clientX
        },
        end(e, shopIndex, good, goodIndex){
            let endX = e.changedTouches[0].clientX
            let left = '0'
            if(good.startX - endX > 100){
                left = '-60px'
            }
            if(endX - good.startX > 100){
                left = '0px'
            }
            Volecity(this.$refs[`goods-${shopIndex}-${goodIndex}`], {
                left
            })
        },
    },
    mixins: [mixin],
})