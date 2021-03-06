import Address from 'js/addressService.js'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: -1,
            address: '',
            id: '',
            type: '',
            instance: '',
            addressData: require('js/address.json'),
            cityList: null,
            districtList: null,
        }
    },
    created() {
        this.type = this.$route.query.type
        this.instance = this.$route.query.instance
        if (this.type === 'edit') {
            let instance = this.instance
            this.provinceValue = parseInt(instance.provinceValue)
            this.name = instance.name
            this.tel = instance.tel
            this.address = instance.address
            this.id = instance.id
        }
    },
    watch: {
        provinceValue(val) {
            if (val === -1) return
            let list = this.addressData.list
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.cityList = list[index].children
            this.cityValue = -1
            this.districtValue = -1
            if (this.type === 'edit') {
                this.cityValue = parseInt(this.instance.cityValue)
            }
        },
        cityValue(val) {
            if (val === -1) return
            let list = this.cityList
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.districtList = list[index].children
            this.districtValue = -1
            if (this.type === 'edit') {
                this.districtValue = parseInt(this.instance.districtValue)
            }
        },
        lists: {
            handler() {
                this.$router.go(-1)
            },
            deep: true
        },
    },
    // computed: { // 第一种方法
    //     lists() {
    //         return this.$store.state.lists
    //     }
    // },
    // computed: mapState['lists'], // 第二种方法
    computed: { // 第三种方法
        ...mapState({
            lists: state => state.lists
        })
    },
    methods: {
        add() {
            let { name, tel, provinceValue, cityValue, districtValue, address } = this
            let data = { name, tel, provinceValue, cityValue, districtValue, address }
            if (this.type === 'add') {
                // Address.add(data).then(res => {
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('addAction', data)
            }
            if (this.type === 'edit') {
                data.id = this.id
                // Address.update(data).then(res => {
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('updateAction', data)
            }
        },
        remove() {
            if (window.confirm('确认删除')) {
                // Address.remove(this.id).then(res => {
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('removeAction', this.id)
            }
        },
        setDefault() {
            // Address.setDefault(this.id).then(res => {
            //     this.$router.go(-1)
            // })
            this.$store.dispatch('setDefaultAction', this.id)
        },
    },
}