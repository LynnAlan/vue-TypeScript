import Axios from 'axios'
const baseURL = "https://cnodejs.org/api/v1";

const axios = Axios.create({
    baseURL,
    timeout: 1000,
    headers: { "X-Requested-With": "XMLHttpRequest" },
    maxContentLength: 2000
});

const get = (url: string, params?: object) => axios.get(url, { params });

const post = (url: string, params?: object) => axios.post(url, params);


/**
 * 获取话题列表
 * @param tab 默认ALL
 * @param page 默认第一页
 * @param limit 默认20
 */
export const getTopics = (tab = "all", page = 1, limit = 20) =>
  get("topics", { tab, page, limit }).then(data => data.data.data);