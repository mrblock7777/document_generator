import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uml:[],
    umlCount: 0
  },
  mutations: {
    addClass(state, value){
      state.uml.push(value);
      state.umlCount++;
    },
    updateClass(state, value){
      state.class_name = value;
    },
    updateAttribute(state, value){
      state.attribute = value;
    },
    updateAttributeType(state, value){
      state.attribute_type = value;
    },
    updateFunctions(state, value){
      state.functions = value;
    }
  },
  actions: {

  }
})
