import Vue from "vue";
import Vuex from "vuex";

// 1.安装插件
Vue.use(Vuex);

// 2.创建对象
const store = new Vuex.Store({
  state: {
    // 状态集合
    count: 1000 // 具体的状态数据
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {}
});

// 3.导出store对象
export default store;
