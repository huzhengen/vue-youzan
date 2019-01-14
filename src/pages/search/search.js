import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'

let { keyword, id } = qs.parse(location.search.substr(1))

new Vue({
    el: '.container',
    data: {
        searchList: null,
        keyword,
        isShow: false,
    },
    created() {
        this.getSearchList()
    },
    methods: {
        getSearchList() {
            axios.post(url.searchList, { id }).then(res => {
                console.log(res)
                this.searchList = res.data.data._req
            })
        },
        move() {
            console.log(document.body.scrollTop)
            if(document.body.scrollTop > 2){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        toTop(){

        },
    },
    mixins: [mixin],
})

