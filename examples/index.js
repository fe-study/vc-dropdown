import Vue from 'vue'
import vcDropdown from '../src/Dropdown.vue'

new Vue({
    el: '#app',
    data () {
        return {
            bools: {
                'true': true,
                'false': false
            },
            useSlot: true,
            label: '下拉菜单',
            open: true,
            customClick (value) {
                alert('自定义点击回调, value = ' + value)
                console.log('自定义点击回调', value)
            },
            onClick (key, value, index) {
                alert('点击回调' + index)
                console.log('点击回调', key, value, index)
            }
        }
    },
    components: {
        vcDropdown
    }
})
