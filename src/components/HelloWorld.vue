<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
        {{testVal}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
    props: {
        msg: String
    }
})
export default class HelloWorld extends Vue {
    testVal:String = '123'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
