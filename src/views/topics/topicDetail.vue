<template>
<div class="topic-detail">
    
</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";
import * as type from "@/store/topics/type";
import { TopicInfo } from "@/store/interface/topics";

type requestTopics = (data?: { tab?: string; page?: number }) => void;

@Component
export default class topicDetail extends Vue{
    @Action(type.REQUEST__TOPIC__DETAILS) requestTopics!: requestTopics;
    @State(state => state.topics.topics)
    topics!: Array<TopicInfo>;
    
}
</script>
<style lang="scss" scoped>
.topic-detail{

}
</style>
