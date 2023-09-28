<script>
import { store } from './store.js';

export default {

  name: 'App',
  components: {

  },

  data() {
    return {
      store,
    }
  },

  methods: {
    searchMovies() {
      store.fetchData(this.store.base_url);
    },
  },

  created() {
    store.fetchData(this.store.base_url);

  },

}
</script>

<template>
  <div class="container">
    <div class="row p-2">
      <div class="col">

        <div class="input-group mb-3">
          <input name="searchBar" id="searchBar" v-model="this.store.searchQuery" type="search" class="form-control"
            placeholder="Cerca film per nome" />
          <button @click="searchMovies" class="btn btn-primary">
            Cerca
          </button>
        </div>
        <!-- /.input-group -->

      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="row">

      <div class="col" v-for="(movie, index) in store.movies" :key="index">

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">Titolo Originale: {{ movie.original_title }}</p>
            <p class="card-text">Lingua: {{ movie.original_language }}</p>
            <p class="card-text">Voto: {{ movie.vote_average }}</p>
          </div>
        </div>
        <!-- /.card -->

      </div>
      <!-- /.col -->

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
</template>

<style lang="scss" scoped></style>