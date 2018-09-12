<template>
    <footer class="main-footer">
        <div class="main-footer-content">
            <div>
                最新
            </div>
            <div>
                分享
            </div>
            <div>
                问答
            </div>
            <div>
                招聘
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