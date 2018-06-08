<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="todo in filteredTodos" :key="todo.id">
      <div class="hover-anchor">
        <a class="hover-action text-muted" @click.prevent="deleteTodo(todo.id)">
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    deleteTodo(id) {
      this.$store.commit('deleteTodo', id);
    }
  },
  computed: {
    ...mapGetters([
      'filteredTodos'
    ])
  },
}
</script>
