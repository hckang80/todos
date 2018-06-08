<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <Form/>
        <Nav/>
        <TodoList/>
        <TodoFooter/>
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
import TodoFooter from './TodoFooter'

export default {
  mounted() {
    this.$store.commit('getTodos');
  },
  components: {
    Form,
    Nav,
    TodoList,
    TodoFooter
  }
}
</script>
