import Vue from "vue";
import App from "./App";

import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   method: "GET",
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// });
axios.defaults.baseURL = "http://123.207.32.32:8000";
axios.defaults.timeout = 5000;

axios
  .all([
    axios({
      url: "home/multidata"
    }),
    axios({
      url: "home/data",
      params: {
        type: "pop",
        page: 1
      }
    })
  ])
  .then(res => {
    console.log(res);
  });
