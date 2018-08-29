<template>
    <div id="app" class="main">
        <Header></Header>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <Footer></Footer>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Header  from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
@Component({
    components:{
        Header,
        Footer
    }
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;


  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main{
    display: flex;
    flex-direction:column
}
</style>
