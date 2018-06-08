<template>
  <input
    id="input-todo"
    class="form-control input-lg"
    placeholder="What needs to be done?"
    v-model="value"
    @keyup.enter="addTodo"
  />
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    addTodo() {
      if (!this.value.trim()) return;
      const content = this.value.trim();
      this.$store.commit('addTodo', content);
      this.value = '';
    }
  }
}
</script>