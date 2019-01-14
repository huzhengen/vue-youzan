import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'

let { keyword, id } = qs.parse(location.search.substr(1))

new Vue({
    el: '.container',
    data: {
        searchList: null,
        keyword
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
        }
    },
})

