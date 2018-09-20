import {
  TopicsState,
  TopicInfo,
  TopicDetails,
  TopicScroll,
  ChangeCollect
} from "@/store/interface/topics";
import { ActionTree, MutationTree, GetterTree } from "vuex";
import { getTopics,getTopicDetails } from "@/api";
import * as type from "@/store/topics/type";

let state: TopicsState = {
  currentTab: "all",
  tabbar: "home",
  topics: [],
  openTopics: [],
  topicsScroll: 0
};
let actions: ActionTree<TopicsState, any> = {
  async [type.REQUEST__TOPICS]({ commit }, data = {}) {
    let { tab = "all", page = 1 } = data;
    let topics = await getTopics(tab, page);
    commit(type.REQUEST__TOPICS, topics);
  },
  async [type.REQUEST__TOPIC__DETAILS]({ commit }, topic: string) {
    let topicDetails = await getTopicDetails(topic);
    topicDetails = Object.assign({}, topicDetails, { scroll: 0 });
    commit(type.REQUEST__TOPIC__DETAILS, topicDetails);
  }
};
let mutations: MutationTree<TopicsState> = {
  [type.REQUEST__TOPICS](state, data: TopicInfo) {
    state.topics = state.topics.concat(data);
  },
  [type.REQUEST__TOPIC__DETAILS](state, data: TopicDetails) {
    let isCollect = false;
    state.openTopics.map(
      topic =>
        topic.id === data.id &&
        (isCollect = true) &&
        (topic.replies = data.replies)
    );
    !isCollect ? state.openTopics.push(data) : null;
  }
};
let getters: GetterTree<TopicsState, any> = {};

export { state, actions, mutations, getters };
