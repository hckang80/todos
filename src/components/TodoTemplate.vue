<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <Form/>
        <Nav/>
        <TodoList/>
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
    <pre>{{ JSON.stringify($store.state.todos) }}</pre>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Form from './Form'
import Nav from './Nav'
import TodoList from './TodoList'

export default {
  mounted() {
    this.$store.commit('getTodos');
  },
  components: {
    Form,
    Nav,
    TodoList
  }
}
</script>
