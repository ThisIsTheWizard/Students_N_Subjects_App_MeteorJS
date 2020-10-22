import { Meteor } from "meteor/meteor";

import Vue from "vue";

import VueMeteorTracker from "vue-meteor-tracker";

Vue.use(VueMeteorTracker);

import App from "../imports/ui/App.vue";

import store from "./store";

Meteor.startup(() => {
  new Vue({
    store,
    render: h => h(App)
  }).$mount("#app");
});