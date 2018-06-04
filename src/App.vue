<template>
  <div id="app">
    <TodoTemplate/>
  </div>
</template>

<script>
import TodoTemplate from './components/TodoTemplate.vue'

export default {
  name: 'app',
  components: {
    TodoTemplate
  }
}
</script>

<style src="../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style src="./App.css"></style>