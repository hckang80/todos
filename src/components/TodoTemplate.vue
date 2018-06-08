<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>
        <Form/>
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
    <pre>{{ JSON.stringify($store.state.todos) }}</pre>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Form from './Form'

export default {
  methods: {
    filterTodos(navStatus) {
      this.$store.commit('filterTodos', navStatus);
    }
  },
  computed: {
    ...mapGetters([
      'navs'  
    ]),
    ...mapGetters([
      'visibility'  
    ]),
    ...mapGetters([
      'filteredTodos'  
    ])
  },
  mounted() {
    this.$store.commit('getTodos');
  },
  components: {
    Form
  }
}
</script>
