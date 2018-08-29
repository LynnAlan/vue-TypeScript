<template>
    <footer class="main-footer">
        <div class="main-footer-content">
            <div>
                首页
            </div>
            <div>
                分类
            </div>
            <div>
                购物车
            </div>
            <div>
                用户
            </div>
        </div>
    </footer>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"

@Component
export default class Footer extends Vue {

}
</script>
<style lang="scss" scoped>
.main-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    &-content{
        display: flex;
        align-items: center;
        justify-content: space-around
    }
}
</style>