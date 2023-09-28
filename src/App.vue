<script>
import { store } from './store.js';

export default {

  name: 'App',
  components: {

  },

  data() {
    return {
      store
    }
  },

  created() {
    store.fetchData();
  },

}
</script>

<template></template>

<style scoped></style>