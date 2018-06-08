import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    navs: ['all', 'active', 'completed'],
    visibility: 'all'
  },
  mutations: {
    getTodos(state) {
      state.todos = [
        { id: 3, content: 'JavaScript', completed: true },
        { id: 2, content: 'CSS', completed: false },
        { id: 1, content: 'HTML', completed: false }
      ];
    },
    addTodo(state, content) {
      const getMaxIds = state.todos.length
        ? Math.max(...state.todos.map(todo => todo.id)) + 1
        : 1;
      const payload = { id: getMaxIds, content, completed: false };
      state.todos = [payload, ...state.todos];
    },
    filterTodos(state, navStatus) {
      state.visibility = navStatus;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  },
  getters: {
    navs(state) {
      return state.navs;
    },
    visibility(state) {
      return state.visibility;
    },
    filteredTodos(state) {
      if (state.visibility === 'all') {
        return state.todos;
      } else if (state.visibility === 'active') {
        return state.todos.filter(todo => !todo.completed);
      } else if (state.visibility === 'completed') {
        return state.todos.filter(todo => todo.completed);
      }
    }
  }
});
