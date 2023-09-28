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
  <div class="container p-3">

    <h1 class="text-danger text-center">BOOLFIX</h1>

    <div class="row p-2">
      <div class="col">

        <div class="input-group mb-3">
          <input @keyup.enter="searchMovies" name="searchBar" id="searchBar" v-model="this.store.searchQuery"
            type="search" class="form-control border-0" placeholder="Cerca film per nome" />
          <button @click="searchMovies" class="btn btn-danger">
            Cerca
          </button>
        </div>
        <!-- /.input-group -->

      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

      <div class="col p-3" v-for="(movie, index) in  store.movies " :key="index">

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">Titolo Originale: {{ movie.original_title }}</p>

            <!-- LANGUAGE -->
            <p class="card-text">
              <span v-if="movie.original_language == 'en'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png'"
                  :alt="movie.original_language">
              </span>
              <span v-else-if="movie.original_language == 'es'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/spain_flags_flag_17068.png'"
                  :alt="movie.original_language">
              </span>
              <span v-else-if="movie.original_language == 'it'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/italy_flags_flag_17018.png'"
                  :alt="movie.original_language">
              </span>
              <span v-else-if="movie.original_language == 'fr'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/france_flags_flag_16999.png'"
                  :alt="movie.original_language">
              </span>
              <span v-else-if="movie.original_language == 'nl'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/netherlands_flags_flag_17041.png'"
                  :alt="movie.original_language">
              </span>
              <span v-else-if="movie.original_language == 'de'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/germany_flags_flag_17001.png'"
                  :alt="movie.original_language">
              </span>

              <span v-else> Lingua: {{ movie.original_language }}</span>
            </p>

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