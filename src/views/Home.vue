<template>
    <div class="topics-home">
        <div>
            <ul>
                <li v-for="(topic, key) in topics" :key="key">
                    <div>{{topic.title}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter, State } from "vuex-class";
import * as type from "@/store/topics/type";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { TopicInfo, TabsInfo } from "@/store/interface/topics";
import { getTopics } from "@/api";
type requestTopics = (data?: { tab?: string; page?: number }) => void;

@Component({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    @Action(type.REQUEST__TOPICS) requestTopics!: requestTopics;
    @State(state => state.topics.topics)
    topics!: Array<TopicInfo>;
    mounted () {
        this.requestTopics()
    }
}
</script>
<style lang="scss">
.topics-home{
    
}
</style>
