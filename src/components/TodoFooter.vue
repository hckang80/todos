<template>
  <div class="row">
    <div class="col-xs-6">
      <label class="i-checks">
        <input type="checkbox" v-model="completed" @change="toggleTodosCompleted(completed)" />
        <i />
        <span>Mark all as complete</span>
      </label>
    </div>
    <div class="col-xs-6 text-right">
      <button class="btn btn-default btn-xs" @click="clearTodoCompleted">
        Clear completed (<span>{{ completedTodoLength }}</span>)
      </button>
      <strong>{{ leftTodoLength }}</strong> item left
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      completed: false
    }
  },
  methods: {
    toggleTodosCompleted(completed) {
      this.$store.commit('toggleTodosCompleted', completed);
    },
    ...mapMutations([
      'clearTodoCompleted'
    ])
  },
  computed: {
    ...mapGetters([
      'completedTodoLength'
    ]),
    ...mapGetters([
      'leftTodoLength'
    ])
  }
}
</script>

