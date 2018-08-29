<template>
    <header class="main-header">
        <div>
            扫一下
        </div>
        <div>
            <input type="text" placeholder="输入搜索内容">
        </div>
        <div>
            最新消息
        </div>
    </header>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component"
import axios from 'axios'

@Component
export default class Header extends Vue {
    mounted(){
        this.testAjax();
    }
    async testAjax() {
        const res:any = await axios.get('/activity');
    }
}
</script>
<style lang="scss" scoped>
.main-header{
    display: flex;
    justify-content: space-between;
    align-items: center
}
</style>


