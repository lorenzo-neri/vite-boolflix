<script>
import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';

export default {

  name: 'App',
  components: {
    AppNavbar,
    AppMain,
  },

  data() {
    return {
    }
  },

  methods: {
  },

  created() {
  },

}
</script>

<template>
  <AppNavbar />

  <AppMain />
</template>

<style lang="scss" scoped></style>