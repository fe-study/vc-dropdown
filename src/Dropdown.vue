<template>
    <div class="vc-dropdown-component" :class="{ 'open': open }">
        <!-- trigger -->
        <slot>
            <a class="dropdown-toggle dropdown-trigger" data-dropdown-trigger="vc-dropdown" @click="handleClick">
                <span>{{ label }}</span>
                <span class="caret"></span>
            </a>
        </slot>
        <!-- menus -->
        <slot name="dropdown-menu">
            <ul slot="dropdown-menu" class="dropdown-menu">
                <li v-for="(key, value) in menus" @click="onClick(key, value, $index)"><a>{{ value }}</a></li>
            </ul>
        </slot>
    </div>
</template>

<style>
.vc-dropdown-component {
    display: inline-block;
    position: relative;
}
</style>

<script>
export default {
    name: 'vc-dropdown',
    props: {
        label: {
            type: String,
            default: '下拉菜单'
        },
        menus: {
            type: Object,
            default () {
                return {
                    'menu0': '下拉菜单0',
                    'menu1': '下拉菜单1',
                    'menu2': '下拉菜单2'
                }
            }
        },
        open: {
            type: Boolean,
            default: false 
        },
        onClick: Function
    },
    methods: {
        toggleDropdown: function (e) {
            e && e.preventDefault()
            this.open = !this.open
        },
        handleClick (e) {
            let el = this.$el
            if (!el.contains(e.target) || e.target.nodeName.toLowerCase() === 'a') {
                this.open = false
            }
        }
    },
    ready: function () {
        var el = this.$el
        var toggle = el.querySelector('[data-dropdown-trigger="vc-dropdown"]')
        if (toggle) {
            toggle.style.borderRadius = '4px'
            toggle.addEventListener('click', this.toggleDropdown)
        }
        window.addEventListener('click', this.handleClick, false)
    },
    beforeDestroy() {
        window.removeEventListener('click', this.handleClick, false)
    }
}
</script>
