import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    navs: ['all', 'active', 'completed'],
    visibility: 'all'
  },
  mutations: {
    getTodos(state, todos) {
      // state.todos = [
      //   { id: 3, content: 'JavaScript', completed: true },
      //   { id: 2, content: 'CSS', completed: false },
      //   { id: 1, content: 'HTML', completed: false }
      // ];
      state.todos = todos;
    },
    addTodo(state, content) {
      const payload = { id: this.getters.getMaxIds, content, completed: false };
      state.todos = [payload, ...state.todos];
    },
    filterTodos(state, navStatus) {
      state.visibility = navStatus;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    toggleTodosCompleted(state, completed) {
      state.todos = state.todos.map(todo =>
        Object.assign({}, todo, { completed })
      );
    },
    clearTodoCompleted(state) {
      if (!this.getters.leftTodoLength) return;
      state.todos = state.todos.filter(todo => !todo.completed);
    }
  },
  getters: {
    getIds(state) {
      return state.todos.map(todo => todo.id);
    },
    getMaxIds(state, getters) {
      return state.todos.length ? Math.max(...getters.getIds) + 1 : 1;
    },
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
    },
    completedTodoLength(state) {
      return state.todos.filter(todo => todo.completed).length;
    },
    leftTodoLength(state) {
      return state.todos.filter(todo => !todo.completed).length;
    }
  },
  actions: {
    getTodos({ commit }) {
      const baseURI = 'http://localhost:4500';
      axios.get(`${baseURI}/todos`).then(result => {
        const { data } = result;
        return commit('getTodos', data);
      });
    }
  }
});
