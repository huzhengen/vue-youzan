import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import axios from 'axios'
import mixin from 'js/mixin.js'
import url from 'js/api.js'

new Vue({
    el: '.container',
    data:{
        lists: null,
        total: 0,
    },
    computed:{
        allSelected: {
            get(){
                if(this.lists&&this.lists.length){
                    return this.lists.every(shop =>{
                        return shop.checked
                    })
                }
                return false
            },
            set(newVal){
                this.lists.forEach(shop => {
                    shop.checked = newVal
                    shop.goodsList.forEach(good=>{
                        good.checked = newVal
                    })
                })
            }
        },
        selectedLists(){
            if(this.lists&&this.lists.length){
                let arr = []
                let total = 0
                this.lists.forEach(shop=>{
                    shop.goodsList.forEach(good=>{
                        if(good.checked){
                            arr.push(good)
                            total += good.price * good.number
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            axios.get(url.cartLists).then(res=>{
                let lists = res.data.cartList
                lists.forEach(shop=>{
                    shop.checked = true
                    shop.editting = false
                    shop.edittingMsg = '编辑'
                    shop.goodsList.forEach(good=>{
                        good.checked = true
                    })
                })
                this.lists = lists
            })
        },
        selectGood(shop, good){
            good.checked = !good.checked
            shop.checked = shop.goodsList.every(good=>{
                return good.checked
            })
        },
        selectShop(shop){
            shop.checked = !shop.checked
            shop.goodsList.forEach(good=>{
                good.checked = shop.checked
            })
        },
        selectAll(){
            this.allSelected = !this.allSelected
        },
    },
    mixins: [mixin],
})