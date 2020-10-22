import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addStudentModal: false,
    updateStudentModal: false,
    addSubjectModal: false,
    updateSubjectModal: false,
    updatingStudentValue: "",
    updatingSubjectValue: ""
  },
  mutations: {
    SET_ADD_STUDENT_MODAL(state) {
      state.addStudentModal = !state.addStudentModal;
    },
    SET_UPDATE_STUDENT_MODAL(state) {
      state.updateStudentModal = !state.updateStudentModal;
    },
    SET_ADD_SUBJECT_MODAL(state) {
      state.addSubjectModal = !state.addSubjectModal;
    },
    SET_UPDATE_SUBJECT_MODAL(state) {
      state.updateSubjectModal = !state.updateSubjectModal;
    },
    SET_UPDATING_STUDENT_VALUE(state, payload) {
      state.updatingStudentValue = payload;
    },
    SET_UPDATING_SUBJECT_VALUE(state, payload) {
      state.updatingSubjectValue = payload;
    }
  },
  actions: {
    CHANGE_ADD_STUDENT_MODAL({ commit }) {
      commit("SET_ADD_STUDENT_MODAL");
    },
    CHANGE_UPDATE_STUDENT_MODAL({ commit }) {
      commit("SET_UPDATE_STUDENT_MODAL");
    },
    CHANGE_ADD_SUBJECT_MODAL({ commit }) {
      commit("SET_ADD_SUBJECT_MODAL");
    },
    CHANGE_UPDATE_SUBJECT_MODAL({ commit }) {
      commit("SET_UPDATE_SUBJECT_MODAL");
    },
    CHANGE_UPDATING_STUDENT_VALUE({ commit }, student) {
      commit("SET_UPDATING_STUDENT_VALUE", student);
    },
    CHANGE_UPDATING_SUBJECT_VALUE({ commit }, subject) {
      commit("SET_UPDATING_SUBJECT_VALUE", subject);
    }
  },
  modules: {
  }
});
