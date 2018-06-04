<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <input
          id="input-todo"
          class="form-control input-lg"
          placeholder="What needs to be done?"
          v-model="value"
          @keyup.enter="addTodo"
        />
        <ul class="nav nav-xs nav-pills">
          <li :class="{ active: nav === visibility }" v-for="(nav, index) in navs" :key="index">
            <a href="#" @click.prevent="filterTodos(nav)">{{ nav }}</a>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item" v-for="todo in filteredTodos" :key="todo.id">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" />
              </a>
              <label class="i-checks">
                <input type="checkbox" v-model="todo.completed" />
                <i />
                <span>{{ todo.content }}</span>
              </label>
            </div>
          </li>
        </ul>
        <div class="col-xs-6">
          <label class="i-checks">
            <input type="checkbox" />
            <i />
            <span>Mark all as complete</span>
          </label>
        </div>
        <div class="col-xs-6 text-right">
          <button class="btn btn-default btn-xs">
            Clear completed (<span>0</span>)
          </button>
          <strong>0</strong> item left
        </div>
      </div>
    </div>
    <pre>{{ JSON.stringify(todos) }}</pre>
  </div>
</template>

<script>
export default {
  name: 'TodoTemplate',
  props: {
    // newTodo: String
  },
  data() {
    return {
      value: '',
      todos: [],
      navs: ['all', 'active', 'completed'],
      visibility: 'all'
    }
  },
  methods: {
    getIds() {
      return this.todos.map(todo => todo.id);
    },
    getMaxIds() {
      return this.todos.length ? Math.max(...this.getIds()) + 1 : 1;
    },
    getTodos() {
      this.todos = [
        { id: 3, content: 'JavaScript', completed: true },
        { id: 2, content: 'CSS', completed: false },
        { id: 1, content: 'HTML', completed: false },
      ];
    },
    addTodo() {
      if (!this.value.trim()) return;
      const content = this.value.trim();
      const newTodo = { id: this.getMaxIds(), content, completed: false };
      this.todos = [newTodo, ...this.todos];
      this.value = '';
    },
    filterTodos(nav) {
      this.visibility = nav;
    }
  },
  computed: {
    filteredTodos() {
      if (this.visibility === 'all') {
        return this.todos;
      } else if (this.visibility === 'active') {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.visibility === 'completed') {
        return this.todos.filter(todo => todo.completed);
      }
    }
  },
  mounted() {
    this.getTodos();
  }
}
</script>
