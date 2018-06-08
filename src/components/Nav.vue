<template>
  <ul class="nav nav-xs nav-pills">
    <li :class="{ active: nav === visibility }" v-for="(nav, index) in navs" :key="index">
      <a href="#" @click.prevent="filterTodos(nav)">{{ nav }}</a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

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
    ])
  },
}
</script>