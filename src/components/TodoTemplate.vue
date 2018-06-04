<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <input
          id="input-todo"
          class="form-control input-lg"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
        <ul class="nav nav-xs nav-pills">
          <li class="active">
            <a>all</a>
          </li>
          <li>
            <a>active</a>
          </li>
          <li>
            <a>completed</a>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item" v-for="todo in todos" :key=todo.id>
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" />
              </a>
              <label class="i-checks">
                <input type="checkbox" v-model=todo.completed />
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
      newTodo: '',
      todos: [
        { id: 3, content: 'JavaScript', completed: true },
        { id: 2, content: 'CSS', completed: false },
        { id: 1, content: 'HTML', completed: false },
      ]
    }
  },
  methods: {
    getIds() {
      return this.todos.map(todo => todo.id);
    },
    getMaxIds() {
      return this.todos.length ? Math.max(...this.getIds()) + 1 : 1;
    },
    addTodo() {
      const content = this.newTodo.trim();
      if (!content) return;
      // this.todos = [{ id: this.getMaxIds(), content, completed: false }, ...this.todos];
      this.todos.unshift({ id: this.getMaxIds(), content, completed: false });
      this.newTodo = '';
    } 
  },
  mounted() {
    // console.log(this.getMaxIds());
  }
}
</script>
